import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-step',
  templateUrl: './image-step.component.html',
  styleUrls: ['./image-step.component.scss']
})
export class ImageStepComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onUpload(event:any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }
}
