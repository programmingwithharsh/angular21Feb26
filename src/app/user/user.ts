import { Component } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  products: any[] = [];
  constructor(private productServ: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productServ.getProducts();
    console.log("User component ", this.products);
  }
}
