import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBtnsComponent } from './footer-btns.component';

describe('FooterBtnsComponent', () => {
  let component: FooterBtnsComponent;
  let fixture: ComponentFixture<FooterBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
