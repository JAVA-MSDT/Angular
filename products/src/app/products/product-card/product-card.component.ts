import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domains/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  product: Product;

  constructor(private router: Router) {
  }

  viewProduct(product: Product): void{
    this.router.navigate(['/products/' + product?.id]);
  }
}
