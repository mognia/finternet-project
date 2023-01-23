import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items!: MenuItem[];

  constructor(){
  }
  ngOnInit(): void {
    this.items = [{
      label: 'Upload your image',
      routerLink: ''
    },
      {
        label: 'Form',
        routerLink: 'second-step'
      },
      {
        label: 'Select Person',
        routerLink: 'third-step'
      },
      {
        label: 'Summary',
        routerLink: 'summary'
      }
    ];
  }
}
