import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AcademicEducationComponent } from './components/academic-education/academic-education.component';

const routes: Routes = [
  {path: '', redirectTo: 'about' , pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'education', component: AcademicEducationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
