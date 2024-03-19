import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  wishData:any
  @Output() onAddWish =new EventEmitter()
  onSubmit(){
  this.onAddWish.emit(this.wishData)
    this.wishData=''

  }
}
