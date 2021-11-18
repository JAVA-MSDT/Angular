import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseBorderStyleDirective } from './course-border-style.directive';

@Component({
  template: `
    <div
      class="container course-component-container"
      [webCourseBorderStyle]="2021 - 10 - 28"
    ></div>

    <div
      class="container course-component-container"
      [webCourseBorderStyle]="2021 - 10 - 28"
    ></div>

    <div
      class="container course-component-container"
      [webCourseBorderStyle]="2021 - 10 - 28"
    ></div>
  `,
})
class WebCourseBorderStyleTest {}

describe('CourseBorderStyleDirective', () => {
  let fixture: ComponentFixture<WebCourseBorderStyleTest>;
  let elements: DebugElement[];
  const FRESH_COURSE_STYLE = '2px solid green';
  const UPCOMING_COURSE_STYLE = '2px solid blue';

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseBorderStyleDirective, WebCourseBorderStyleTest],
    }).createComponent(WebCourseBorderStyleTest);
    fixture.detectChanges();

    elements = fixture.debugElement.queryAll(
      By.directive(CourseBorderStyleDirective)
    );
  });

  it('should color 1st <h2> background "yellow"', () => {
    const bgColor = elements[0].nativeElement.style.border;
    expect(bgColor).toBe(FRESH_COURSE_STYLE);
  });
});
