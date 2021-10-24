import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

import { CourseDetailsComponent } from './course-details.component';
import { CoursesService } from '../courses.service';
import { of } from 'rxjs';
import { CourseModule } from '../course.module';
import { CoursesComponent } from '../courses/courses.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;
  let router: Router;
  let location: Location;
  const routes: Routes = [{path: 'courses', component: CoursesComponent}]
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
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes(routes)]

    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(CourseDetailsComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should navigate to Courses page when backToCourses called', fakeAsync(() => {
    router.navigate(['courses']);
    tick();
    expect(location.path()).toBe('/courses');
  }))
});
