import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  formEmailResult: string;
  formPasswordResult: string;

  constructor(private fb: FormBuilder) { }
  
  onSubmit(): void {
    console.log(this.productForm.value)
    this.formEmailResult = this.productForm.value.email as string;
    this.formPasswordResult = this.productForm.value.password as string;
  }
}
