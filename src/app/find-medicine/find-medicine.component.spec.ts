import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMedicineComponent } from './find-medicine.component';

describe('FindMedicineComponent', () => {
  let component: FindMedicineComponent;
  let fixture: ComponentFixture<FindMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
