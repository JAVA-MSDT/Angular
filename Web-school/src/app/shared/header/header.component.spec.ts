import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CoursesComponent } from 'src/app/course/courses/courses.component';
import { LoginComponent } from '../login/login.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;
  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'courses', component: CoursesComponent },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(HeaderComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to Courses page wehn we call goToCourses()`, fakeAsync(() => {
    router.navigate(['courses']);
    tick();
    expect(location.path()).toBe('/courses');
  }));

  it(`should navigate to Login page wehn we call goToLogin()`, fakeAsync(() => {
    router.navigate(['/']);
    tick();
    expect(location.path()).toBe('/');
  }));
});
