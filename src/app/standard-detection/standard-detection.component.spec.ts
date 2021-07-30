import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StandarDetectionComponent } from './standard-detection.component';

describe('StandarDetectionComponent', () => {
  let component: StandarDetectionComponent;
  let fixture: ComponentFixture<StandarDetectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StandarDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandarDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
