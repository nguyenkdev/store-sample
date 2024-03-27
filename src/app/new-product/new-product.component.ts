import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (result) => {
        console.log('Add product: ' + result);
        this.router.navigate(['products']);
      },
    });
  }
}
