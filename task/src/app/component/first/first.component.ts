import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
@Input() title=''
  showData(event:any){
  console.log(event)
  }
}
