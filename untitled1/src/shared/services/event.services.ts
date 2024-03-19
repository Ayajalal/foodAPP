import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn:'root'})
export class EventService{
   subject=new Subject();
  subject$=this.subject.asObservable();
}
