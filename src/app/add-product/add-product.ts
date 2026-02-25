import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct implements OnInit {
  productForm!: FormGroup;
  products: any[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['iPhone', Validators.required],
      productCode: ['100', Validators.required],
      releaseDate: ['2026-02-27', Validators.required],
      description: ['Excellent Phone', Validators.required],
      price: ['450000', Validators.required],
      starRating: ['5', Validators.required],
      imageUrl: ['https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg'],
    })
    // load data from localstorage
    const savedProducts = localStorage.getItem("products");

    // JSON.parse - convert string into object
    this.products = savedProducts ? JSON.parse(savedProducts) : [];
  }

  onSubmit() {

    /*
    let username = "Sushma"; // string
    let interests: any = ["Reading books", "Work out", "Listening Music", "Cooking"]; // array
    let birth: any = { // object
      year: 2000,
      place: "Karnatka"
    };

    // store data in local storage 
    localStorage.setItem("username", username);
    localStorage.setItem("interests", interests);
    localStorage.setItem("birth", JSON.stringify(birth)); // store object

    // get data from localstorage
    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("interests"));
    console.log(localStorage.getItem("birth"));

    let data: any = localStorage.getItem("birth");
    console.log(JSON.parse(data));
    */

    if (this.productForm.valid) {
      alert("Form is submitted");
      // console.log(this.productForm.value);
      const newProduct = {
        productId: Number(new Date()),
        ...this.productForm.value
      }
      debugger
      this.products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(this.products)); // store object
    }
  }
}
