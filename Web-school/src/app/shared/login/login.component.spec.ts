import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';
import { CoursesComponent } from 'src/app/course/courses/courses.component';

describe('LoginComponent', () => {
  const courses = { path: 'courses', component: CoursesComponent };
  const Routerspy = jasmine.createSpyObj('Router', ['navigate']);
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: Router,
          useValue: Routerspy,
        },
      ], 
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes([courses])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should Navigate To Courses', () => {
    router.navigate(["/courses"]).then(() => {
      expect(location.path()).toBe("/courses");
    });
  });
});
