import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CoursesComponent } from './courses.component';
import { CoursesService } from '../courses.service';
import { FilterPipe } from 'src/app/pipes/filterPipe.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { HighlightSearchPipe } from 'src/app/pipes/highlight-search.pipe';


describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, FilterPipe, OrderByPipe, HighlightSearchPipe],
      imports: [TranslateModule.forRoot()],
      providers: [CoursesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
