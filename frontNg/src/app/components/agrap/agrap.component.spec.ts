import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrapComponent } from './agrap.component';

describe('AgrapComponent', () => {
  let component: AgrapComponent;
  let fixture: ComponentFixture<AgrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgrapComponent]
    });
    fixture = TestBed.createComponent(AgrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
