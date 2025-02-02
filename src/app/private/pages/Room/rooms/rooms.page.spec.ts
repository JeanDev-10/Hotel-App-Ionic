import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomsPage } from './rooms.page';

describe('RoomsPage', () => {
  let component: RoomsPage;
  let fixture: ComponentFixture<RoomsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
