import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from './data-model-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private m: DataModelManagerService, private router: Router) { }

  ngOnInit() {
    this.m.loggedIn = false;
    localStorage.removeItem('access_token');
    this.router.navigate(['/home']);
  }
}
