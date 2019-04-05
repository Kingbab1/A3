import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from "./data-model-manager.service";
import { Student } from "./classDiagram";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // web service containers
  students: Student[];
  student: Student;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {
    this.m.studentGetAll().subscribe(s => this.students = s);
  }
} 