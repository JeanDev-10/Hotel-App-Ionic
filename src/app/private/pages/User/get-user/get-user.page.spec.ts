import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetUserPage } from './get-user.page';

describe('GetUserPage', () => {
  let component: GetUserPage;
  let fixture: ComponentFixture<GetUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
