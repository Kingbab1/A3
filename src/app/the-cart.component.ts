import { Component, OnInit } from '@angular/core';
import { Student, Course, emptyStudent, EmptyStudentResult } from './classDiagram';
import { DataModelManagerService } from './data-model-manager.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-the-cart',
  templateUrl: './the-cart.component.html',
  styleUrls: ['./the-cart.component.css']
})
export class TheCartComponent implements OnInit {
   student: Student;
   possibleCourse: Course[];
   coursesMatched: Course[];
   selectedCourse: Course[];
   emptystudent: emptyStudent;
   emptyStudentResult: EmptyStudentResult;
  constructor( private m: DataModelManagerService, private r: Router) { 

    this.student = new Student();
    this.possibleCourse = new Array();
    this.coursesMatched = new Array();
    this.selectedCourse = new Array();
    this.emptystudent = new emptyStudent();

  }
  
  ngOnInit() {
    if(this.m.student == undefined) {this.r.navigate(['../students']);}
    this.student = this.m.student;
    this.selectedCourse = this.student.coursesTentative;
    if(this.student.academicProgram.match("BSD"))
    {
      this.possibleCourse = this.m.coursesPossibleBSD;
     this.CourseMatched();
    }
    if(this.student.academicProgram.match("CPA"))
    {
      this.possibleCourse = this.m.coursesPossibleCPA;
  
      this.CourseMatched();
    }
  }
  
  CourseMatched(): void 
  {
    console.log("0st IF")
   
    for(let i = 0; i < this.possibleCourse.length; i++)
    {
      if(this.possibleCourse[i].enrolTotal < 4)
      {
        for(let j = 0; j < this.student.credits.length; j++)
        {
          
          if((this.possibleCourse[i].courseCode.match(this.student.credits[j].courseCode)) )
          {    
            // prerequisite checker wont work because it wont let me compare a type never which im not sure how to deal with   
           /*  let check = false;
           if (this.possibleCourse[i].prerequisite.length > 0) 
            {
              let counter = 0;
                for(let notifinal = 0 ; i < this.possibleCourse[i].prerequisite.length; notifinal++)
                {
                  for(let notifinalreal = 0; notifinalreal < this.student.credits.length; notifinalreal++)
                  {
                    var t = this.student.credits[notifinalreal].courseCode
                    t = t.toString()
                    var ty = this.possibleCourse[i].prerequisite[i]
                    if(ty == t )
                      {
                          counter ++
                      }
                  }
                }
                if(counter == this.possibleCourse[i].prerequisite.length)
                {
                  check = true
                }
            }
            if(check){*/
            this.possibleCourse[i].classStart = this.possibleCourse[i].classStart.slice(0,this.possibleCourse[i].classStart.length - 3);
            this.possibleCourse[i].classEnd = this.possibleCourse[i].classEnd.slice(0,this.possibleCourse[i].classEnd.length - 3);
            this.coursesMatched.push(this.possibleCourse[i]);   
                  
          }
        }
      }
    }
    
  } 
  CourseSelected(t_course: Course) : Boolean
  {
    for(var i = 0; i < this.selectedCourse.length; i++)
    {
      if(t_course.courseId ==  this.selectedCourse[i].courseId  && t_course.termSectionId == this.selectedCourse[i].termSectionId && t_course.section == this.selectedCourse[i].section)
        {
            return true
        }
    }
    return false
  }
  selectCourse(t_course: Course): void 
  {
      if(!(this.CourseSelected(t_course)))
      {
        this.selectedCourse.push(t_course);
      }
      else{
        for(var i = 0; i < this.selectedCourse.length; i++)
    {
      if(t_course.courseId ==  this.selectedCourse[i].courseId  && t_course.termSectionId == this.selectedCourse[i].termSectionId && t_course.section == this.selectedCourse[i].section)
        {
            this.selectedCourse.splice(i,1);
        }
    }
      }
  }
  Clear() : void {
    this.emptystudent = this.student;
    this.emptystudent.coursesTentative = new Array();
    this.selectedCourse = new Array();
    this.student.message = "Cleared";
    this.m.cartSave(this.student.studentId, this.emptystudent).subscribe(u => this.emptyStudentResult = u);
  }
  SaveCart() : void {
    this.emptystudent = this.student;
    this.emptystudent.coursesTentative = this.selectedCourse;
    this.student.message = "Saved";
    this.m.cartSave(this.student.studentId, this.emptystudent).subscribe(u => this.emptyStudentResult = u);
  }
  confirm() : void{
    this.student.message = "Cart Confirmed"
    this.m.confirmCart(this.student._id, this.selectedCourse).subscribe(u => this.emptyStudentResult = u);
  }
}
