import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-service';
import { IProduct } from '../iproduct';
import { NgIf, JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  imports: [JsonPipe, NgIf],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit, OnDestroy {
  product: IProduct | undefined;
  errorMessage = '';
  sub1!: Subscription;
  sub2!: Subscription;
  subs: Subscription[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }
  ngOnInit(): void {
    console.log("ngOnInit - Component mounted");
    // this.subs.push()
    this.sub1 = this.route.queryParamMap.subscribe(q => {
      const page = q.get('page');
      const sort = q.get('sort');
      // console.log('page: ', page, 'sort: ', sort);
    })
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    // this.subs.push()
    this.sub2 = this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: err => this.errorMessage = err
    })
  }

  goBack() {
    this.router.navigate(["/products"]);
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe(); // unsubscribe, ?. optional chaining, if sub exist -> unsubsribe
    this.sub2?.unsubscribe(); // unsubscribe
    //  this.subs.forEach(s => s.unsubscribe())
    console.log("ngOnDestroy - Component unmounted");
  }
}
