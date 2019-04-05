import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar.component';

//import { StudentListComponent } from './student-list.component';


import { AboutComponent } from "./about.component"
import {StudentListComponent} from "./student-list.component";
import { CourseListComponent } from './course-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { CartSelectedCellComponent } from './cart-selected-cell.component';
import { CartSelectedListComponent } from './cart-selected-list.component';
import { CartSelectedGridComponent } from './cart-selected-grid.component';
import { TheCartComponent } from './the-cart.component';
import { InvalidRouteComponent } from './invalid-route.component';
import { HelpInfoComponent } from './help-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    StudentListComponent,
    AboutComponent,
    StudentListComponent,
    CourseListComponent,
    StudentDetailComponent,
    CartSelectedCellComponent,
    CartSelectedListComponent,
    CartSelectedGridComponent,
    TheCartComponent,
    InvalidRouteComponent,
    HelpInfoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
