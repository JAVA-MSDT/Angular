import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CourseDomain } from 'src/app/domain/course-domain';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CourseComponenetComponent } from './course-componenet.component';

describe('CourseComponenetComponent', () => {
  const Routerspy = jasmine.createSpyObj('Router', ['navigate']);
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub;
  let component: CourseComponenetComponent;
  let fixture: ComponentFixture<CourseComponenetComponent>;
  let expectedCourse: CourseDomain = {
    id: 1,
    title: 'Environmental Tech',
    creatingDate: '2020-12-06',
    duration: 204,
    description: 'Description' 
   };
   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponenetComponent ],
      providers: [
        {
          provide: Router,
          useValue: Routerspy,
        },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteStub 
        }
      ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponenetComponent);
    component = fixture.componentInstance;

    activatedRouteStub.setParamMap({id: expectedCourse.id});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
