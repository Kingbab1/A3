import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { StudentListComponent } from "./student-list.component";
import { CourseListComponent } from "./course-list.component";
import { StudentDetailComponent } from "./student-detail.component";
import { TheCartComponent } from "./the-cart.component";
import { InvalidRouteComponent } from "./invalid-route.component";
import { HelpInfoComponent } from "./help-info.component";




const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentListComponent }, 
  { path: 'courses', component: CourseListComponent },
  { path: 'students/detail/:id' , component:StudentDetailComponent},
  { path: 'cart/select' , component:TheCartComponent},
  { path: 'invalid-route' , component:InvalidRouteComponent},
  { path: 'help', component: HelpInfoComponent },
 // { path: 'students/detail/:id' , component:StudentDetailComponent},
  {path: '**', redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
