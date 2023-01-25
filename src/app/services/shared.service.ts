import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 imageDetails  = new BehaviorSubject([null]);
 formDetails  = new BehaviorSubject({});
 tableDetails  = new BehaviorSubject({});
  constructor() { }
  setImageDetails(details: any[]) {
    this.imageDetails.next(details)
  }
  setFormDetails(form:object){
    this.formDetails.next(form)
  }
  setTableValue(user:object) {
    this.tableDetails.next(user)
  }

}
