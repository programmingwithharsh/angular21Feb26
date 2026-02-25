import { NgIf, NgFor, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../convert-to-spaces-pipe';
import { FilterProductPipe } from '../filter-product-pipe';
import { Star } from '../star/star';
import { ProductService } from '../product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [NgIf, NgFor, FormsModule, UpperCasePipe, LowerCasePipe, ConvertToSpacesPipe, FilterProductPipe, Star, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  pageTitle = "Product List"; // property
  showImage: boolean = false;
  listFilter: string = 'cart';

  products: any[] = [];

  constructor(private productServ: ProductService) { // calling a service
    // console.log("Constructor 1");
  }

  ngOnInit(): void {
    // console.log("ngOnInit 2");
    this.products = this.productServ.getProducts();
  }

  toggleImage() {
    // console.log("Clicked !!");
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = message;
  }
}
