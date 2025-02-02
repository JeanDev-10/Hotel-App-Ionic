import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneReservationPage } from './one-reservation.page';

describe('OneReservationPage', () => {
  let component: OneReservationPage;
  let fixture: ComponentFixture<OneReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OneReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
