import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() title='';
  @Output() seconedTitle=new EventEmitter();
  onLoad(){
    this.seconedTitle.emit("data from Second")
  }

}
