import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { Student } from "./classDiagram";
import { Course } from "./classDiagram";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: []
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  coursesPossibleBSD: Course[];
  coursesPossibleCPA: Course[];

  constructor(private m: DataModelManagerService, private route: ActivatedRoute) {
    this.student = new Student();
    this.coursesPossibleBSD = new Array();
    this.coursesPossibleCPA = new Array();
   }

  ngOnInit() {
    
    let id = this.route.snapshot.params['id'];
    this.m.studentGetById(id).subscribe(u => this.student = u);
    this.m.courseGetBSD().subscribe(c => this.coursesPossibleBSD = c);
    this.m.courseGetCPA().subscribe(c => this.coursesPossibleCPA = c);
    console.log(this.student)
  }
    
  ngOnDestroy() {
    this.m.student = this.student;
    this.m.coursesPossibleBSD = this.coursesPossibleBSD;
    this.m.coursesPossibleCPA = this.coursesPossibleCPA;
  }
}
