import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStepComponent } from './image-step.component';

describe('ImageStepComponent', () => {
  let component: ImageStepComponent;
  let fixture: ComponentFixture<ImageStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
