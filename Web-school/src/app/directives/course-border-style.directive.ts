import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[webCourseBorderStyle]'
})
export class CourseBorderStyleDirective {

  @Input('webCourseBorderStyle') creationDate: string = '';

  constructor(private element: ElementRef) { 
    this.changeBorderStyle('2px solid green');
  }

  changeBorderStyle(borderStyle: string) : void {
    this.element.nativeElement.style.border = borderStyle; 
    console.log(this.creationDate);
  }
}
