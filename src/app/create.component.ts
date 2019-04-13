import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  private url: string = 'https://limitless-ocean-63331.herokuapp.com';
  credentials: Credentials;
  register: Boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.credentials = new Credentials();
    this.credentials.userName = '';
    this.credentials.password = '';
    this.credentials.passwordConfirm = '';
    this.credentials.fullName = '';
    this.credentials.role = '';
   }

  ngOnInit() {
  }

  onSubmit(): void {
  
    this.create(this.credentials)
    .subscribe(
      res => {
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    )
  }

  create(credentials: Credentials): Observable<any> { 
    return this.http.post<any>(`${this.url}/api/useraccounts/create`, credentials);
  }
}

export class Credentials {
  userName: string;
  fullName: string;
  password: string;
  passwordConfirm: string;
  role: string; 
}

