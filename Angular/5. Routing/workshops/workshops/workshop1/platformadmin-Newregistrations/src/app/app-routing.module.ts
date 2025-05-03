import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobprovidersComponent } from './jobproviders/jobproviders.component';
import { SeekerComponent } from './seeker/seeker.component';

const routes: Routes = [
  { path: 'jobproviders', component: JobprovidersComponent },
  { path: 'jobseeker', component: SeekerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
