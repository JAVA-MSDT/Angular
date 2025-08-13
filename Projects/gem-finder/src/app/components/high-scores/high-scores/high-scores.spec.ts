import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScores } from './high-scores';

describe('HighScores', () => {
  let component: HighScores;
  let fixture: ComponentFixture<HighScores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighScores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighScores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
