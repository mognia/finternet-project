import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent implements OnInit {
  summaryObj!: any;
  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
   this.makeSummary()
  }
  makeSummary(){
    this.summaryObj = {
      image: this.sharedService.imageDetails.getValue(),
      form: this.sharedService.formDetails.getValue(),
      table: this.sharedService.tableDetails.getValue(),
    };
    console.log(this.summaryObj)
  }
}
