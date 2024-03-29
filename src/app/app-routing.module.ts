import { ExperienceComponent } from './components/experience/experience.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AcademicEducationComponent } from './components/academic-education/academic-education.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'about' , pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'education', component: AcademicEducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
