import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html'
})

export class ActivateComponent implements OnInit {

  private url: string = 'https://limitless-ocean-63331.herokuapp.com';
  credentials: Credentials;

  constructor(private http: HttpClient, private router: Router) {
    this.credentials = new Credentials();
    this.credentials.userName = '';
    this.credentials.password = '';
    this.credentials.passwordConfirm = '';
    this.credentials.role = '';
   }

  ngOnInit() {
  }

  onSubmit(): void {
    this.activate(this.credentials)
    .subscribe(
      res => {
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    ) 
  }

  activate(credentials: Credentials): Observable<any> {
    return this.http.post<any>(`${this.url}/api/useraccounts/activate`, credentials);
  }
}

export class Credentials {
  userName: string; 
  password: string; 
  passwordConfirm: string; 
  role: string; 
}
