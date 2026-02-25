import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(id);
  }

  goBack() {
    this.router.navigate(["/products"]);
  }
}
