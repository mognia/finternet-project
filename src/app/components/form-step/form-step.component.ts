import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";

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
  constructor(private fb: FormBuilder,public sharedService:SharedService,public router: Router) { }

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
    if (this.myForm.valid) {
      this.sharedService.setFormDetails(this.myForm.value);
      this.router.navigate(["third-step"]);
    }
  }
  prePage(){
    this.router.navigate([""]);
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
