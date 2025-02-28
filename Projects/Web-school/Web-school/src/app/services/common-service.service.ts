import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  
  isErrorBroder(courseForm: FormGroup, inputformName: string): boolean {
    return (
      courseForm.get(inputformName).invalid &&
      (courseForm.get(inputformName).dirty ||
        courseForm.get(inputformName).touched)
    );
  }
}
