import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedGetallComponent } from './med-getall.component';

describe('MedGetallComponent', () => {
  let component: MedGetallComponent;
  let fixture: ComponentFixture<MedGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedGetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
