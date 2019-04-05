import { Component, OnInit } from '@angular/core';

import { DataModelManagerService } from "./data-model-manager.service";
import { Course } from "./classDiagram";


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: []
})
export class CourseListComponent implements OnInit {

  // web service container
  courses: Course[];
  course: Course;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {
    this.m.courseGetAll().subscribe(c => this.courses = c);
    
  }

}