import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRoomPage } from './create-room.page';

describe('CreateRoomPage', () => {
  let component: CreateRoomPage;
  let fixture: ComponentFixture<CreateRoomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
