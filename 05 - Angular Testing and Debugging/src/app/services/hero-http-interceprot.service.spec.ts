import { TestBed } from '@angular/core/testing';

import { HeroHttpInterceprotService } from './hero-http-interceprot.service';

describe('HeroHttpInterceprotService', () => {
  let service: HeroHttpInterceprotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroHttpInterceprotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
