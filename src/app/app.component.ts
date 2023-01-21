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
      label: 'Personal',
      routerLink: ''
    },
      {
        label: 'Seat',
        routerLink: 'second-step'
      },
      {
        label: 'Payment',
        routerLink: 'third-step'
      },
      {
        label: 'Confirmation',
        routerLink: 'summary'
      }
    ];
  }
}
