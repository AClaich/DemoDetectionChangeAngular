import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostOnpushComponent } from './ghost-onpush.component';

describe('GhostOnpushComponent', () => {
  let component: GhostOnpushComponent;
  let fixture: ComponentFixture<GhostOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
