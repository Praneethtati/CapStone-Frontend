import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetallComponent } from './user-getall.component';

describe('UserGetallComponent', () => {
  let component: UserGetallComponent;
  let fixture: ComponentFixture<UserGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
