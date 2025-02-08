import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateReservationPage } from './create-reservation.page';

describe('CreateReservationPage', () => {
  let component: CreateReservationPage;
  let fixture: ComponentFixture<CreateReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
