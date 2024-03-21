import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [
    { 
      name: 'Test', 
      description: this.generateRandomDescription(), 
      price: 1000.00,
      imageUrl: 'https://granfondo-cycling.com/wp-content/uploads/sites/3/2021/11/Trek-Supercaliber-9.8-GX-Test-Review-Gravel-Mountainbike-2021-069.jpg'
    },
    { 
      name: 'Product 2', 
      description: this.generateRandomDescription(), 
      price: 2000.00,
      imageUrl: 'https://ep1.pinkbike.org/p5pb24577661/p5pb24577661.jpg'
    },
    { 
      name: 'Product 3', 
      description: this.generateRandomDescription(), 
      price: 3000.00,
      imageUrl: 'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/11/Orbea-Oiz-copy.jpg'
    },
    { 
      name: 'Product 4', 
      description: this.generateRandomDescription(), 
      price: 3000.00,
      imageUrl: 'https://i.nextmedia.com.au/News/Spark_RC_900_WC_2022_SCOTT_Image_by_Jochen_Haar_9562.jpg'
    },
    { 
      name: 'Product 5', 
      description: this.generateRandomDescription(), 
      price: 4000.00,
      imageUrl: 'https://enduro-mtb.com/wp-content/uploads/2016/06/Scott-Spark-First-Look-CB-1-1140x760.jpg'
    },
    { 
      name: 'Product 6', 
      description: this.generateRandomDescription(), 
      price: 5000.00,
      imageUrl: 'https://www.mtb-mag.com/wp-content/uploads/2020/07/U5A0904-HDR.jpg'
    }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    console.log('addToCart() function called');
    console.log('Adding product to cart:', product);
    this.cartService.addToCart(product);
  }

  private generateRandomDescription(): string {
    const words = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
      "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
      "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
    ];

    let description = '';
    const descriptionLength = Math.floor(Math.random() * 20) + 10; 

    for (let i = 0; i < descriptionLength; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      description += words[randomIndex] + ' ';
    }

    return description.trim();
  }
}
//