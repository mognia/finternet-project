import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {SharedService} from "../../services/shared.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-step',
  templateUrl: './table-step.component.html',
  styleUrls: ['./table-step.component.scss']
})
export class TableStepComponent implements OnInit {
  users!:User[];
  selectedUser!: User;
  constructor(public userService:UserService,public sharedService:SharedService,public router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().then(data => this.users = data )
  }
  nextPage() {
    if (this.selectedUser!=null) {
      this.sharedService.setTableValue(this.selectedUser);
      this.router.navigate(["summary"]);
    }
  }
  prePage(){
    this.router.navigate(["second-step"]);
  }
}
