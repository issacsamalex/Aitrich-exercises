import { Component } from '@angular/core';
import { ShortList } from '../shortlist';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  shortList: ShortList[];
  filteredList :ShortList[];
  constructor() {
    this.shortList = [
      {
        Image:"../../assets/images/man-isolated-showing-facial-emotions 1.png",
        Name: "Alan",
        Education: "MCA",
        Years:"3 Years",
        Location:"Bangalore"
      },
      {
        Image:"../../assets/images/cheerful-curly-business-girl-wearing-glasses 2.png",
        Name: "Sarah",
        Education: "MSc",
        Years:"2 Years",
        Location:"Chennai"
      },
      {
        Image:"../../assets/images/adult-serious-businessman-looking-camera 1.png",
        Name: "Vivek",
        Education: "BTech/CSE",
        Years:"5 Years",
        Location:"Thiruvananthapuram"
      },
      {
        Image:"../../assets/images/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign 2.png",
        Name: "Deepak Roy",
        Education: "BTech/EEE",
        Years:"3 Years",
        Location:"Calicut"
      },
    ];
    this.filteredList=this.shortList;
}
filterList(event: Event): void {
  const searchTerm = (event.target as HTMLInputElement).value;
  this.filteredList = this.shortList.filter(list =>
    list.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    list.Education.toLowerCase().includes(searchTerm.toLowerCase())||
    list.Location.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
}