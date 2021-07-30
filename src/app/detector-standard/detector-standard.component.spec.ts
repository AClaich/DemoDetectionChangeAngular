import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorStandardComponent } from './detector-standard.component';

describe('DetectorStandardComponent', () => {
  let component: DetectorStandardComponent;
  let fixture: ComponentFixture<DetectorStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectorStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectorStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
