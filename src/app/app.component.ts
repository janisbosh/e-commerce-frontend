import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent,CheckoutComponent, CommonModule,MainComponent, HeaderComponent, FooterComponent, RouterModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {}

  navigateToProductDetails() {
    
    this.router.navigate(['/product', 1]); 
  }
}