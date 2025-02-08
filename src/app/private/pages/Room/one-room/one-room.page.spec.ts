import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneRoomPage } from './one-room.page';

describe('OneRoomPage', () => {
  let component: OneRoomPage;
  let fixture: ComponentFixture<OneRoomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
