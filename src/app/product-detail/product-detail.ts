import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-service';
import { IProduct } from '../iproduct';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [JsonPipe, NgIf],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  product: IProduct | undefined;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(q => {
      const page = q.get('page');
      const sort = q.get('sort');
      console.log('page: ', page, 'sort: ', sort);
    })
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: err => this.errorMessage = err
    })
  }

  goBack() {
    this.router.navigate(["/products"]);
  }
}
