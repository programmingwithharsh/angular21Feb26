import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Highlight } from '../highlight';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, Highlight, NgStyle],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome {

  price = 200;
  constructor(private router: Router) {

  }

  goToProducts() {
    this.router.navigate(["/products"]);
  }

  generateError() {
    throw new Error("Test error");
  }
}
