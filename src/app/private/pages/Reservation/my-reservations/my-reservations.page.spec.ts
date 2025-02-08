import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReservationsPage } from './my-reservations.page';

describe('MyReservationsPage', () => {
  let component: MyReservationsPage;
  let fixture: ComponentFixture<MyReservationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
