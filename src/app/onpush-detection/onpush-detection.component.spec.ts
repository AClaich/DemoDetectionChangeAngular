import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushDetectionComponent } from './onpush-detection.component';

describe('OnpushDetectionComponent', () => {
  let component: OnpushDetectionComponent;
  let fixture: ComponentFixture<OnpushDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
