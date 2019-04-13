import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  loggedIn: Boolean;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {
    this.loggedIn = this.m.loggedIn;
  }

}
