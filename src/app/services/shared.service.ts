import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 imageDetails  = new Subject();
 formDetails  = new BehaviorSubject(null);
 tableDetails  = new BehaviorSubject(null);
  constructor() { }
  setImageDetails(details: any[]=[]) {
    this.imageDetails.next(details)
  }
  setFormDetails(){}
}
