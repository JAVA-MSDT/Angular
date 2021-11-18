import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';
import { CoursesComponent } from 'src/app/course/courses/courses.component';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  const courses = { path: ROUTER_PATH.coursesPage, component: CoursesComponent };
  const Routerspy = jasmine.createSpyObj('Router', ['navigate']);
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: Router,
          useValue: Routerspy,
        },
        FormBuilder
      ], 
      imports: [TranslateModule.forRoot(), RouterTestingModule.withRoutes([courses])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

});
