import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostRefComponent } from './ghost-ref.component';

describe('GhostRefComponent', () => {
  let component: GhostRefComponent;
  let fixture: ComponentFixture<GhostRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
