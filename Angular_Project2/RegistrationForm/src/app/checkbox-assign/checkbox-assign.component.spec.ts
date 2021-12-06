import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAssignComponent } from './checkbox-assign.component';

describe('CheckboxAssignComponent', () => {
  let component: CheckboxAssignComponent;
  let fixture: ComponentFixture<CheckboxAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
