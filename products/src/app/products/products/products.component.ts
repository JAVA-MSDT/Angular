import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/domains/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  productsUrl: string = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Product[]>(this.productsUrl)
      .subscribe((product) => {
        console.log(product);
        this.products = product;
      });
  }

}
