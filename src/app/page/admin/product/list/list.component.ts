import { Component, inject } from '@angular/core';
import { Product } from '../../../../type/product';
import { ProductService } from '../../../../sevice/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data.filter(prouduct => prouduct.active !== false);
      },
      error: (er) => {

      }
    })
  }

  deleproduct(id: string) {
    if (window.confirm("bạn có chắc chắn muốn xóa không")) {
      this.productService.deletePrd(id).subscribe({
        next: () => {
          this.products = this.products.filter(product => product.id !== id)

        },
        error: () => {

        }
      })
    }
  }
}
