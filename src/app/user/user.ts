import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { UserService, IUser } from '../user-service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [JsonPipe, NgFor, NgIf],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  products: any[] = [];
  users: IUser[] = [];
  constructor(private productServ: ProductService, private userServ: UserService) {
  }

  ngOnInit(): void {
    this.products = this.productServ.getProducts();
    this.userServ.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.log('Error: ', err)
    })
    console.log("User component ", this.products);
  }
}
