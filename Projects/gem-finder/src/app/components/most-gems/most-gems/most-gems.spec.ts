import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostGems } from './most-gems';

describe('MostGems', () => {
  let component: MostGems;
  let fixture: ComponentFixture<MostGems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostGems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostGems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
