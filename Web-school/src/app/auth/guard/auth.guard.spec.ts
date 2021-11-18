import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Location } from '@angular/common';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)]
    });
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    guard = TestBed.inject(AuthGuard);
    router.initialNavigation();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
