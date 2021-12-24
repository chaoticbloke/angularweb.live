import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoursesComponent } from './courses/courses/courses.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'courses', component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
