import { Component } from '@angular/core';
import {job} from '../job';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
   black:string='#000000';
   ordinarycolor:string='rgb(200, 159, 239)';
   clickcolor:string='#a72ba9';
   backgroundcolor:string='rgb(200, 159, 239)';
   
   setclickcolor(){
    this.backgroundcolor=this.clickcolor;
   }
   setordinarycolor()
   {
    this.backgroundcolor=this.ordinarycolor;
   }
  
   jobs:job[]=[
    {
      id:'#APL-0003',
      dateapplied:'June 1,2020,08:22AM',
      company:'Mosciski Inc.Creative Design Agency',
      type:'FREELANCE',
      position:'Intern UI Designer',
      contact:"../../assets/images/",
      status:"pending"
     },
     {
      id:'#APL-0003',
      dateapplied:'June 1,2020,08:22AM',
      company:'Mosciski Inc.Creative Design Agency',
      type:'FREELANCE',
      position:'Intern UI Designer',
      contact:"../../assets/images/",
      status:"On-Hold"
     }
     ,
     {
      id:'#APL-0003',
      dateapplied:'June 1,2020,08:22AM',
      company:'Mosciski Inc.Creative Design Agency',
      type:'FREELANCE',
      position:'Intern UI Designer',
      contact:"../../assets/images/",
      status:"pending"
     },
     {
      id:'#APL-0003',
      dateapplied:'June 1,2020,08:22AM',
      company:'Mosciski Inc.Creative Design Agency',
      type:'FREELANCE',
      position:'Intern UI Designer',
      contact:"../../assets/images/",
      status:"Candidate"
     },
     {
      id:'#APL-0003',
      dateapplied:'June 1,2020,08:22AM',
      company:'Mosciski Inc.Creative Design Agency',
      type:'FREELANCE',
      position:'Intern UI Designer',
      contact:"../../assets/images/",
      status:"On-Hold"
     },
     {
      id:'#APL-0003',
      dateapplied:'June 1,2020,08:22AM',
      company:'Mosciski Inc.Creative Design Agency',
      type:'FREELANCE',
      position:'Intern UI Designer',
      contact:"../../assets/images/",
      status:"Candidate"
     }
   ];

   tempjobs:job[]=this.jobs;
   totaljobs:number=this.jobs.length;
   filtervalue(status:string){
    if(status==='pending'){
      const filteredjobs:job[]=this.jobs.filter(jobs=>Object.values(jobs).some(value=>typeof value=='string' && value.toLocaleLowerCase().includes(status.toLocaleLowerCase())));
     return this.tempjobs=filteredjobs;
    }
    else if(status==='on-hold'){
      console.log(status);
      const filteredjobs:job[]=this.jobs.filter(jobs=>Object.values(jobs).some(value=>typeof value=='string' && value.toLocaleLowerCase().includes(status.toLowerCase())))
      return this.tempjobs=filteredjobs;
    }
    else if(status==='candidate'){
    console.log(status);
    const filteredjobs:job[]=this.jobs.filter(jobs=>Object.values(jobs).some(value=>typeof value=='string' && value.toLocaleLowerCase().includes(status.toLocaleLowerCase())))
    return this.tempjobs=filteredjobs;
    }
    else{
      const filteredjobs:job[]=this.jobs;
      return this.tempjobs=filteredjobs;
    }
   }

}
