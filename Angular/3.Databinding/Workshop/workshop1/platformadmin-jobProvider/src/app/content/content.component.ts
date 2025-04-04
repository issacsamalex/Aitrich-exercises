import { Component } from '@angular/core';
import { Company } from '../jobproviderlist';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  company: Company[];
  filteredCompany :Company[];
  constructor() {
    this.company = [
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Funk Inc.",
        jobRole: "IT Department"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Aitrich Ltd.",
        jobRole: "IT Department"

      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Highspeed Studios",
        jobRole: "Creative Design Agency"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Mosciski Inc.",
        jobRole: "Creative Design Agency"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Incubator Studios",
        jobRole: "Software House"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Naonotu Inc.",
        jobRole: "Creative Design Agency"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "ColoColo Studios",
        jobRole: "Internet Service Porvider"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
       companyName: "Funk Inc.",
        jobRole: "IT Department"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Mosciski Inc.",
        jobRole: "Creative Design Agency"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Highspeed Studios",
        jobRole: "Creative Design Agency"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Simonis Ltd",
        jobRole: "Internet Service Porvider"
      },
      {
        companyLogo:"../../assets/images/companyLogo.png",
        companyName: "Funk Inc.",
        jobRole: "IT Department"
      },
    ];

    this.filteredCompany = this.company;
  }

  filterJobs(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filteredCompany = this.company.filter(company =>
      company.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.jobRole.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  isHovered: boolean = false;

}



