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
  @Input() displayOnToutchedOrDirty: boolean;

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

  isTouchedOrDirty(): boolean {
    return this.abstractControl.touched || this.abstractControl.dirty;
  }

  displayErrorOnTouchOrDirty(): boolean {
    if (this.displayOnToutchedOrDirty === undefined) {
      this.displayOnToutchedOrDirty = true;
    }
    return (
      this.displayOnToutchedOrDirty &&
      this.hasError() &&
      this.isTouchedOrDirty()
    );
  }

  displayError(): boolean {
    if (this.displayOnToutchedOrDirty === undefined) {
      return false;
    }
    return !this.displayOnToutchedOrDirty && this.hasError();
  }
}
