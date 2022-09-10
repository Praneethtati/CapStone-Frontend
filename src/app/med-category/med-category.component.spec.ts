import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedCategoryComponent } from './med-category.component';

describe('MedCategoryComponent', () => {
  let component: MedCategoryComponent;
  let fixture: ComponentFixture<MedCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
