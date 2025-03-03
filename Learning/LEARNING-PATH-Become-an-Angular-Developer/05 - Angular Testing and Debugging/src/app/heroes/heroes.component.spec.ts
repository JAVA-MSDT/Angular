import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebStorageService } from '../services/web-storage.service';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],

      providers: [
        {
          provide: WebStorageService,
          useValue: jasmine.createSpyObj([
            'WebSotrageService',
            ['setRemote', 'getRemote'],
          ]),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
