import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  data:string="message from child";
  @Output() message =new EventEmitter<string>;
  notify(){
    this.message.emit(this.data);
  }
}
