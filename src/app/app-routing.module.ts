import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'login', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'courses', component:CoursesComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
