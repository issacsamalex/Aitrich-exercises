import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
    msg:string="welcome";
    changemsg(){
      this.msg="Hello,Sona"
    }

    count:number=0;

    increment(){
      this.count++;
      if(this.count>5){
           this.resetcount();
      }
    }

    resetcount(){
      this.count=0;
    }

    name:string="sona";
    
    imgurl:string="../../assets/images/education.jpg"
    changeimg(){
      this.imgurl="../../assets/images/reachout.jpg"
    }
   

}
