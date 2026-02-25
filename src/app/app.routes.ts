import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { ProductList } from './product-list/product-list';
import { About } from './about/about';
import { User } from './user/user'; // userlist component
import { Title } from './title/title';
import { AddProduct } from './add-product/add-product';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
    { path: 'welcome', component: Welcome },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    { path: 'products/:id', component: ProductDetail }, // Dynamic Route
    { path: 'about', component: About },
    { path: 'users', component: User },
    { path: 'title', component: Title },
    { path: 'addproduct', component: AddProduct },
    { path: 'productdetail', component: ProductDetail },
];
