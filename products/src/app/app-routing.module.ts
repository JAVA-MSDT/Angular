import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { ProductPageComponent } from './products/product-page/product-page.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products' + '/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
