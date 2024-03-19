import {Component, OnInit} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {SearchService} from "./search.service";
// import "rxjs/add/operator/debounceTime";
// import "rxjs/add/operator/distinctUntilChanged";
// import "rxjs/add/operator/mergeMap";
import { debounceTime,distinctUntilChanged,flatMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'hello  from app';
  items!:Array<string>;
  term=new Subject<string>();//observable
  constructor(private service:SearchService) {
    // this.term.pipe(debounceTime(4000),distinctUntilChanged(),flatMap((term:any)=> this.service.search(term)))
    //   .subscribe((results:any)=> {(this.items = results);console.log(results)});
  }
  search(term:string){
    this.service.search(term).subscribe(res=>this.items=res);
  }
  onChange(event:any){
    this.term.next(event.target.value)
  }

  ngOnInit(): void {
    const obser=new Observable();
    obser.subscribe(()=>console.log("ddd"))
    const sub=of(1,3,4);
    sub.subscribe((x)=>console.log("ffff",x))
  }
}
