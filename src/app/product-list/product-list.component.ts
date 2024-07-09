import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productService = inject(ProductServiceService)
  productLists = signal<any>([])
  constructor() {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      const products = await this.productService.loadAllProducts();
      this.productLists.set(products)
    } catch (error) {
      console.log(error)
    }
  }
}
