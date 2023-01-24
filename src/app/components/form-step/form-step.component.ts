import { Component, OnInit } from '@angular/core';

interface Options {
  name: string,
  code: string
}
@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {
  date!: Date;
  minDate!: Date;
  maxDate!: Date;
  options!: Options[];
  selectedOption!: Options;
  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    this.minDate = new Date();
    this.minDate.setDate(today.getDate() );
    this.maxDate = new Date();
    this.maxDate.setDate(today.getDate() + 5);
    this.options = [
      {name: 'Online', code: 'ON'},
      {name: 'Offline', code: 'OFF'},
      {name: 'Busy', code: 'BSY'},
      {name: 'Deactivated', code: 'DC'},
    ];
  }
  nextPage() {}
  prePage(){}

}
