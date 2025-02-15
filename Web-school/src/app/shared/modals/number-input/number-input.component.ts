import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'web-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NumberInputComponent),
    },
  ],
})
export class NumberInputComponent implements OnInit, ControlValueAccessor {
  @Input() id = 'number-field-id';
  @Input() placeholder = 'Enter a Number';
  @Input() classesName: string;
  @Input() ariaLabelledBy: string;
  @Input() errorClass: string;
  numberField = new FormControl('');
  constructor() {}

  private onChange: (inputValue: number) => void;
  private onTouched: () => void;

  ngOnInit(): void {
  }

  doInput(): void {
    this.onChange(Number.parseInt(this.numberField.value));
  }

  doBlur(): void {
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.numberField.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.numberField.disable() : this.numberField.enable();
  }
}
