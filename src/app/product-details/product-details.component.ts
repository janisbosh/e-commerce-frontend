import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Description of Product 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Description of Product 2'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Description of Product 3'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      description: 'Description of Product 4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}