import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
 todolist=[
  {taskname:'using phone',priority:'Low'},
  {taskname:'reading',priority:'Medium'},
  {taskname:'study',priority:'High'},
 ];

prioritylist(item:string){
  if(item==='Low'){
    return 'low-priority';
  }
  else if(item==='Medium'){
    return 'medium-priority';
  }
  else{
    return 'high-priority';
  }
}

newtask:string="";
newpriority:string="";
addnew(){
  if(this.newtask && this.newpriority){
    this.todolist.push({taskname:this.newtask,priority:this.newpriority});
    this.newtask="";
     this.newpriority="";
  }

}


}
