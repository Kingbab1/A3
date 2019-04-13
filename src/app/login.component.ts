import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  // Properties

  credentials: Credentials;
  loginError: string;
  loggedIn: Boolean = false;
  showMessage: Boolean;

  // Initialization

  constructor(private router: Router, private a: AuthService, private jwtHelper: JwtHelperService, private m: DataModelManagerService) {
    this.credentials = new Credentials();
    this.credentials.userName = '';
    this.credentials.password = '';
    this.loginError = '';
   }

  ngOnInit() {
  }

  // Methods
  onSubmit(): void {
    
    // Complete this method...

    // Clear the existing token
    localStorage.removeItem('access_token');

    // Attempt to login, by calling the login method of the auth service
    
    this.a.login(this.credentials)
    .subscribe(
      res => {
        // If successful...
        //   Save the token in the browser's local storage
        //   Navigate to a landing/info view (home page?)
        localStorage.setItem('access_token', res.token);
        let tokenDecoded = this.jwtHelper.decodeToken(res.token);
        this.loggedIn = true; 
        this.router.navigate(['/students/detail/', tokenDecoded.userName]);
      },
      // If not successful...
      // console.log the error
      err => console.log(err)
    ) 
  }

  ngOnDestroy() {
    this.m.loggedIn = this.loggedIn;
  }
}

// User name and password

export class Credentials {
  userName: string;
  password: string;
}
