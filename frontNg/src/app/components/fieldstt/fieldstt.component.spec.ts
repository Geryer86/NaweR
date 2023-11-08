import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsttComponent } from './fieldstt.component';

describe('FieldsttComponent', () => {
  let component: FieldsttComponent;
  let fixture: ComponentFixture<FieldsttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsttComponent]
    });
    fixture = TestBed.createComponent(FieldsttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
