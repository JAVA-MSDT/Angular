import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseDetailsComponent } from './course-details.component';
import { CoursesService } from '../courses.service';
import { CourseModule } from '../course.module';
import { routes } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;
  let router: Router;
  let location: Location;
  let activatedRouteStub: ActivatedRouteStub; 
  let expectedCourse: CourseModule =   {
    id: 1,
    title: 'Environmental Tech',
    creatingDate: '2020-12-06',
    duration: 204,
    topRated: true,
    description: 'Description' 
   };
   
  beforeEach(async () => {
    activatedRouteStub = new ActivatedRouteStub(expectedCourse);
     TestBed.configureTestingModule({
      declarations: [ CourseDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
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
    router.navigate([ROUTER_PATH.coursesPage]);
    tick();
    expect(location.path()).toBe(ROUTER_PATH.contextPath + ROUTER_PATH.coursesPage);
  }))
});
