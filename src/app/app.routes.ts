import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
    { path: 'Products', component: ProductListComponent },
    { path: 'Checkout', component: CheckoutComponent },
    { path: 'Cart', component: CartComponent },
    { path: '', component: MainComponent },
];
