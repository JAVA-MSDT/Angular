import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { CourseDetailsComponent } from './course-details.component';
import { CoursesService } from '../courses.service';
import { of } from 'rxjs';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
