import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 imageDetails  = new Subject();
 formDetails  = new Subject();
 tableDetails  = new Subject();
  constructor() { }
  setImageDetails(details: any[]=[]) {
    this.imageDetails.next(details)
  }
  setFormDetails(form:object){
    this.formDetails.next(form)
  }
}
