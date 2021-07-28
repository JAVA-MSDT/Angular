import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponenetComponent } from './course-componenet.component';

describe('CourseComponenetComponent', () => {
  let component: CourseComponenetComponent;
  let fixture: ComponentFixture<CourseComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
