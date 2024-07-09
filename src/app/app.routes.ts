import { Routes } from '@angular/router';

import { ProductListComponent } from '../app/product-list/product-list.component';
import { HomeComponent} from '../app/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
];
