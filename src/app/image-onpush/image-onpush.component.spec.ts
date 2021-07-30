import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOnpushComponent } from './image-onpush.component';

describe('ImageOnpushComponent', () => {
  let component: ImageOnpushComponent;
  let fixture: ComponentFixture<ImageOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
