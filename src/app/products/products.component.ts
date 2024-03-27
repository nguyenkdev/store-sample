import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Array<ProductRepresentation> = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (result) => {
        this.products = result;
      },
    });
  }
}
