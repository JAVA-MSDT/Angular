import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { CourseDomain } from 'src/app/domain/course-domain';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CourseComponenetComponent } from './course-componenet.component';
import { routes } from '../courses-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseComponenetComponent', () => {
  let component: CourseComponenetComponent;
  let fixture: ComponentFixture<CourseComponenetComponent>;
  let router: Router;
  let location: Location;
  let activatedRouteStub: ActivatedRouteStub; 
  let expectedCourse: CourseDomain = {
    id: 1,
    title: 'Environmental Tech',
    creatingDate: '2020-12-06',
    duration: 204,
    description: 'Description' 
   };
   
  beforeEach(async () => {
    activatedRouteStub = new ActivatedRouteStub(expectedCourse);
      TestBed.configureTestingModule({
      declarations: [ CourseComponenetComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub 
        }
      ],
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(CourseComponenetComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
