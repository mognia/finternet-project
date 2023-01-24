import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

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
    this.myForm = this.fb.group({
      amount: ['',[Validators.required,CustomValidator.numeric]],
      srcAmount: ['',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      date: [this.date,Validators.required],
      select: [this.selectedOption,Validators.required],
    });
  }
  nextPage() {
  }
  prePage(){}

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Date', form.value.date);
    console.log('amount', form.value.amount);
    console.log('srcAmount', form.value.srcAmount);
    console.log('select', form.value.select);
  }
}
export class CustomValidator{
  // Number only validation
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
}
