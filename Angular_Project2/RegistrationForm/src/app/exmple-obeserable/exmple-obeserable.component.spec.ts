import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleObeserableComponent } from './exmple-obeserable.component';

describe('ExmpleObeserableComponent', () => {
  let component: ExmpleObeserableComponent;
  let fixture: ComponentFixture<ExmpleObeserableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleObeserableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmpleObeserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
