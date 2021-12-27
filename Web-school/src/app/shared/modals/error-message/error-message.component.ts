import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'web-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() formGroupErrorName: FormGroup;
  @Input() formControlErrorName: string;
  @Input() errorName: string;
  @Input() errorMessage: string;
  @Input() displayOnToutched = false;

  abstractControl: AbstractControl;

  constructor() {}

  ngOnInit(): void {
    this.abstractControl = this.formGroupErrorName.get(
      this.formControlErrorName
    );
  }

  hasError(): boolean {
    return this.abstractControl.hasError(this.errorName);
  }

  isTouched(): boolean {
    return this.abstractControl.touched;
  }
}
