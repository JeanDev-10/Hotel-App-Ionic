import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRoomPage } from './edit-room.page';

describe('EditRoomPage', () => {
  let component: EditRoomPage;
  let fixture: ComponentFixture<EditRoomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
