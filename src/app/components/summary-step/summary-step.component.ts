import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent implements OnInit {
  summaryObj!: any;
  constructor(public sharedService:SharedService, public router: Router) { }

  ngOnInit(): void {
   this.makeSummary()
  }
  makeSummary(){
    this.summaryObj = {
      image: this.sharedService.imageDetails.getValue(),
      form: this.sharedService.formDetails.getValue(),
      table: this.sharedService.tableDetails.getValue(),
    };
    if (Object.keys(this.summaryObj.form).length ==0 || Object.keys(this.summaryObj.table).length ==0) {
      this.summaryObj = null
    }
    console.log(this.summaryObj)
  }

  onPre(b: boolean) {
    this.router.navigate([""]);
  }
}
