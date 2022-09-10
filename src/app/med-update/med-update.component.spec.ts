import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedUpdateComponent } from './med-update.component';

describe('MedUpdateComponent', () => {
  let component: MedUpdateComponent;
  let fixture: ComponentFixture<MedUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
