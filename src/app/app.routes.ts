import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Title } from './title/title';
import { CategoriesList } from './categories/categories-list/categories-list';

export const routes: Routes = [
    { path: 'welcome', component: Welcome },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    {
        path: 'products',
        loadChildren: () => import('./product.routes').then(r => r.PRODUCT_ROUTES)
    },
    { path: 'about', loadComponent: () => import('./about/about').then(r => r.About) },
    { path: 'users', loadComponent: () => import('./user-list/user-list').then(r => r.UserList) },
    { path: 'title', component: Title },
    { path: 'categories', component: CategoriesList }
];
