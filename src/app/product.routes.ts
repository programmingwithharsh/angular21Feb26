import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { AddProduct } from './add-product/add-product';
import { ProductDetail } from './product-detail/product-detail';
import { productDetailGuard } from './product-detail-guard';

export const PRODUCT_ROUTES: Routes = [
    { path: '', component: ProductList },
    { path: ':id', canActivate: [productDetailGuard], component: ProductDetail }, // Dynamic Route
    { path: 'addproduct', component: AddProduct }
];
