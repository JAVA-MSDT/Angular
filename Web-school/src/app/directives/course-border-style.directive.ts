import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[webCourseBorderStyle]',
})
export class CourseBorderStyleDirective implements OnInit {
  readonly MS_PER_DAY = 1000 * 60 * 60 * 24;
  readonly FRESH_COURSE_STYLE = '2px solid green';
  readonly UPCOMING_COURSE_STYLE = '2px solid blue';

  @Input('webCourseBorderStyle') creationDate: string;
  creationDateDate: Date;
  currentDate: Date;

  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.currentDate = new Date();
    this.creationDateDate = new Date(this.creationDate);
    const FourteenDays = this.dateInPeriodOfTimeFromNow(14);
    const upcomingCourse = this.dateInPeriodOfTimeFromNow(
      this.subtractTwoDates(this.currentDate, this.creationDateDate)
    );
    if (
      this.creationDateDate < this.currentDate &&
      this.creationDateDate >= FourteenDays
    ) {
      this.changeBorderStyle(this.FRESH_COURSE_STYLE);
    } else if (this.creationDateDate > upcomingCourse) {
      this.changeBorderStyle(this.UPCOMING_COURSE_STYLE);
    }
  }

  changeBorderStyle(borderStyle: string): void {
    this.element.nativeElement.style.border = borderStyle;
  }

  subtractTwoDates(dateOne: Date, dateTwo: Date): number {
    const utc1 = Date.UTC(
      dateOne.getFullYear(),
      dateOne.getMonth(),
      dateOne.getDate()
    );
    const utc2 = Date.UTC(
      dateTwo.getFullYear(),
      dateTwo.getMonth(),
      dateTwo.getDate()
    );

    return Math.floor((utc2 - utc1) / this.MS_PER_DAY);
  }

  dateInPeriodOfTimeFromNow(days: number): Date {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - days);
    return currentDate;
  }
}
