import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {wishItem} from "../../shared/models/wishlist_item";

@Component({
  selector: 'app-filters-dropdown',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filters-dropdown.component.html',
  styleUrls: ['./filters-dropdown.component.css']
})
export class FiltersDropdownComponent implements  OnInit{
  selectedValue:any;
  @Output() onChangeFilter=new EventEmitter();
  filters=[(item:wishItem)=>item,
    (item:wishItem)=>item.isComplete,
    (item:wishItem)=>!item.isComplete]
  @Input() filterTypes :any;
  onChange($event:any){
    this.onChangeFilter.emit(this.filters[$event])
  }

  ngOnInit(): void {
    this.onChangeFilter.emit(this.filters[0])
  }
}
