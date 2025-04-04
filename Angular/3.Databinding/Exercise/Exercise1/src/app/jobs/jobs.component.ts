import { Component } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  black: string = "#000000";
  resetBlue: string = "rgb(202, 169, 232)";
  setColor:string="#a72ba9";
   divBackgroundColor1: string = "rgb(202, 169, 232)";
 
   setBackground() {
  
    this.divBackgroundColor1 = this.resetBlue;
   }
 
  resetBackground() {
    this.divBackgroundColor1 = this.setColor;
 }
  
  jobs: Job[] =
    [{

      id: "#APL-0003",
      dateApplied: "June 1,2020,08:22AM",
      companyName: "Mosciski Inc.Creative Design Agency",
      type: "FREELANCE",
      position: "Intern UI Designer",
      contact:"../../assets/images/phone.jpeg",
      status:"pending",

    },
    {
      id: "#APL-0003",
      dateApplied: "June 1,2020,08:22AM",
      companyName: "Mosciski Inc.Creative Design Agency",
      type: "FREELANCE",
      position: "Intern UI Designer",
      contact:"../../assets/images/",
      status:"On-Hold",

    },
    {
      id: "#APL-0003",
      dateApplied: "June 1,2020,08:22AM",
      companyName: "Mosciski Inc.Creative Design Agency",
      type: "FREELANCE",
      position: "Intern UI Designer",
      contact:"../../assets/images/",
      status:"pending",

    },
    {
      id: "#APL-0003",
      dateApplied: "June 1,2020,08:22AM",
      companyName: "Mosciski Inc.Creative Design Agency",
      type: "FREELANCE",
      position: "Intern UI Designer",
      contact:"../../assets/images/",
      status:"Candidate",

    },
    {
      id: "#APL-0003",
      dateApplied: "June 1,2020,08:22AM",
      companyName: "Mosciski Inc.Creative Design Agency",
      type: "FREELANCE",
      position: "Intern UI Designer",
      contact:"../../assets/images/",
      status:"On-Hold",

    },
    {
      id: "#APL-0003",
      dateApplied: "June 1,2020,08:22AM",
      companyName: "Mosciski Inc.Creative Design Agency",
      type: "FREELANCE",
      position: "Intern UI Designer",
      contact:"../../assets/images/",
      status:"Candidate",

    },
    ]

    totalJobs:number=this.jobs.length;
  tempJobs: Job[] = this.jobs;
  filter(status: string) {
    // let tempJobs:Job[]=this.jobs;
    if (status === "pending") {
      const filteredJobs: Job[] = this.jobs.filter(jobs => Object.values(jobs).some(value => typeof value === 'string' && value.toLowerCase().includes(status.toLowerCase())));
      return this.tempJobs = filteredJobs;
    }
    else if(status=='on-hold'){
      console.log(status)
      const filteredJobs: Job[] = this.jobs.filter(jobs => Object.values(jobs).some(value => typeof value === 'string' && value.toLowerCase().includes(status.toLowerCase())));
      return this.tempJobs = filteredJobs;
    }
    else if(status=='Candidate'){
      console.log(status)
      const filteredJobs: Job[] = this.jobs.filter(jobs => Object.values(jobs).some(value => typeof value === 'string' && value.toLowerCase().includes(status.toLowerCase())));
      return this.tempJobs = filteredJobs;
    }
    else
    {
      console.log(status)
      const filteredJobs: Job[] = this.jobs;
      return this.tempJobs = filteredJobs;
    }
  }

}
