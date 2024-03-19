import {Component, Inject, OnInit} from '@angular/core';
import {wishItem} from "../shared/models/wishlist_item";
import {EventService} from "../shared/services/event.services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   eventService=Inject(EventService)
  title = 'untitled1';
  selectedValue:any='0';
  items=[new wishItem('learn angular',true),
    new wishItem('pray'),
    new wishItem('speak english flunetly ',true),
  ]
  changeFilterSelected=()=>{}
  constructor() {
  }
  get visibleItems():wishItem[]{
    return this.items.filter(this.changeFilterSelected)
  }
  filterTypes=[{key:0,value:"All"},{key:1,value:'fulfilled'},{key:2,value:'unfulfilled'}]
  onToggle(event:wishItem){
    event.isComplete=!event.isComplete
    console.log(event)
    console.log(this.items)
  }
  onSubmit(wishData:any){
    this.items.push( new wishItem(wishData))


  }

  ngOnInit(): void {
    this.eventService.subject$.subscribe((item:any)=>{
      console.log(this.items)
      let index=this.items.indexOf(item)
      console.log(item)
      this.items.splice(index,1)
      // this.items.splice(0,1)
    })
  }

}
