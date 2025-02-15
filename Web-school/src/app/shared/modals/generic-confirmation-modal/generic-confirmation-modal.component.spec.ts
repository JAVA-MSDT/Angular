import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericConfirmationModalComponent } from './generic-confirmation-modal.component';

describe('GenericConfirmationModalComponent', () => {
  let component: GenericConfirmationModalComponent;
  let fixture: ComponentFixture<GenericConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericConfirmationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
