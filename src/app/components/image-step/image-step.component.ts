import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-step',
  templateUrl: './image-step.component.html',
  styleUrls: ['./image-step.component.scss']
})
export class ImageStepComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(public sharedService:SharedService,public router: Router) { }

  ngOnInit(): void {
  }
  onUpload(event:any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  next(){
    this.sharedService.setImageDetails(this.uploadedFiles);
    this.router.navigate(["second-step"]);
  }
}
