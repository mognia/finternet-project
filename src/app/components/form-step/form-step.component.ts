import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {
  date!: Date;
  minDate!: Date;
  maxDate!: Date;
  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    this.minDate = new Date();
    this.minDate.setDate(today.getDate() );
    this.maxDate = new Date();
    this.maxDate.setDate(today.getDate() + 5);
  }

}
