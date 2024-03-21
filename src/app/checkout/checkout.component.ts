import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  shippingInfo: any = { name: '', address: '' };
  billingInfo: any = { name: '', address: '' };
  paymentMethod: string = ''; 

  constructor() { }

  submitOrder(): void {
        console.log('Shipping Information:', this.shippingInfo);
    console.log('Billing Information:', this.billingInfo);
    console.log('Payment Method:', this.paymentMethod);
   
  }
}