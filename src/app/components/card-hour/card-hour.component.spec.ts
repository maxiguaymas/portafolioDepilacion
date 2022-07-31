import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHourComponent } from './card-hour.component';

describe('CardHourComponent', () => {
  let component: CardHourComponent;
  let fixture: ComponentFixture<CardHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
