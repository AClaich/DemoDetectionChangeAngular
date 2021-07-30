import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorOnpushComponent } from './detector-onpush.component';

describe('DetectorOnpushComponent', () => {
  let component: DetectorOnpushComponent;
  let fixture: ComponentFixture<DetectorOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectorOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectorOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
