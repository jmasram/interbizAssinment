import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavborComponent } from './navbor.component';

describe('NavborComponent', () => {
  let component: NavborComponent;
  let fixture: ComponentFixture<NavborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
