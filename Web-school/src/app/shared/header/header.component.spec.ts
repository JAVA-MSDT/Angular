import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const Routerspy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        {
          provide: Router,
          useValue: Routerspy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to 'Courses' page`, () => {
    component.goToCourses();
    const spy = Routerspy.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs[0]).toBe('/courses');
  });

  it(`should navigate to 'home' page`, () => {
    component.goToLogin();
    const spy = Routerspy.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs[0]).toBe('/');
  });
});
