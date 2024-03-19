import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {wishItem} from "../../shared/models/wishlist_item";
import {EventService} from "../../shared/services/event.services";

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  constructor(private eventService:EventService) {
  }
  @Input() wishList:wishItem[]=[]
  onToggle(event:wishItem){
    event.isComplete=!event.isComplete
  }
  removeWish(item:wishItem){
this.eventService.subject.next(item)
  }
}
