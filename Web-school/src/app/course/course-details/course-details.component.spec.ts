import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { CourseDetailsComponent } from './course-details.component';
import { CoursesService } from '../courses.service';
import { of } from 'rxjs';
import { CourseModule } from '../course.module';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;
  let expectedCourse: CourseModule =   {
    id: 1,
    title: 'Environmental Tech',
    creatingDate: '2020-12-06',
    duration: 204,
    description: 'Description' 
   };
   
  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ CourseDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              id: 2,
            }),
          }
        },
          CoursesService
        ],
      imports: [TranslateModule.forRoot()]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    component.course.title = 'Title Added'; 
    fixture.detectChanges();
  });

  it('should create', () => {
    component.course.title = 'Title Added'; 
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
