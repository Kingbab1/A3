import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar.component';


import { AboutComponent } from "./about.component"
import {StudentListComponent} from "./student-list.component";
import { CourseListComponent } from './course-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { CartSelectedCellComponent } from './cart-selected-cell.component';
import { CartSelectedListComponent } from './cart-selected-list.component';
import { CartSelectedGridComponent } from './cart-selected-grid.component';
import { TheCartComponent } from './the-cart.component';
import { InvalidRouteComponent } from './invalid-route.component';
import { HelpInfoComponent } from './help-info.component';
import { ActivateComponent } from './activate.component'
import { LoginComponent } from './login.component'
import { AuthService } from './auth.service';
import { GuardAuthService } from './guard-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptTokenService } from "./intercept-token.service";
import { LogoutComponent } from './logout.component';
import { CreateComponent } from './create.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    HelpInfoComponent,
    ActivateComponent,
    LoginComponent,
    LogoutComponent,
    CreateComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'JWT'
      }
    }),
  ],
  providers: [
    AuthService,
    GuardAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
