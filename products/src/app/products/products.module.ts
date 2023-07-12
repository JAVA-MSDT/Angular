import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductsComponent,
    ProductCardComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductPageComponent,
    ProductsComponent,
    AddProductComponent
  ]
})
export class ProductsModule { }
