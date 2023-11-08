import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroprottComponent } from './croprott.component';

describe('CroprottComponent', () => {
  let component: CroprottComponent;
  let fixture: ComponentFixture<CroprottComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CroprottComponent]
    });
    fixture = TestBed.createComponent(CroprottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
