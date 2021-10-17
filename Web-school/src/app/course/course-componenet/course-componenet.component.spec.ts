import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { CourseComponenetComponent } from './course-componenet.component';

describe('CourseComponenetComponent', () => {
  const Routerspy = jasmine.createSpyObj('Router', ['navigate']);
  let component: CourseComponenetComponent;
  let fixture: ComponentFixture<CourseComponenetComponent>;

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
          useValue: {
            paramMap: of({ get: (key) => 2 }),
          }
        }
      ],
      imports: [TranslateModule.forRoot()]
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
