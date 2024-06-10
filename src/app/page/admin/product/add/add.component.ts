import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../sevice/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  productService = inject(ProductService);
  router = inject(Router)
  addForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    desc: new FormControl('', [Validators.required]),
    active: new FormControl(false)
  })
  addProduct() {
    this.productService.addPrd(this.addForm.value).subscribe({
      next: (data) => {
        console.log(data)
        alert('thêm thành công')
        this.router.navigate(['product/list'])
      },
      error: (error) => {
        // show error
        console.error(error.message);
      },
    });
  }
}
