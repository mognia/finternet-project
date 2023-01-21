import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStepComponent } from './table-step.component';

describe('TableStepComponent', () => {
  let component: TableStepComponent;
  let fixture: ComponentFixture<TableStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
