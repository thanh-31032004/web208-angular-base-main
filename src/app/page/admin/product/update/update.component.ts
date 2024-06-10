import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../sevice/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  router = inject(Router)
  productId!: string | undefined;
  addForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    desc: new FormControl('', [Validators.required]),
    active: new FormControl(false)
  })
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      this.productService.getProductDetail(param['id']).subscribe({
        next: (data) => {

          this.addForm.patchValue(data);
        },
        error: (error) => {

        },
      });
    });
  }
  updateProduct() {
    if (!this.productId) return;
    this.productService
      .updateProduct(this.productId, this.addForm.value)
      .subscribe({
        next: (data) => {
          console.log(data);
          alert("update thành công")
          this.router.navigate(['product/list'])
        },
        error: (error) => {

        },
      });
  }
}
