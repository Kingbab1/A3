import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { Student, Course, emptyStudent, EmptyStudentResult} from "./classDiagram";

@Injectable({
  providedIn: 'root'
})

export class DataModelManagerService {

  constructor(private http: HttpClient) { }
 

   // URL to the getters/putters/ anything else that is needed of the web service
   // all students
  private students: string = "https://banana-pie-84184.herokuapp.com/api/students";
  //All Courses
  private courses: string = "https://banana-pie-84184.herokuapp.com/api/courses";
  //All Cpa classes for winter 2019
  private coursesCPA: string = "https://banana-pie-84184.herokuapp.com/api/courses/cpa";
  //All BSD classes for winter 2019
  private coursesBSD: string = "https://banana-pie-84184.herokuapp.com/api/courses/bsd";

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler incase something goes wrong allows the app to still run
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      //Incase of error doesnt stop the app, but returns nothing
      console.error(error); 
      console.log('error u dummy')
  
     
      return of(result as T);
    };
  }


// containers for the getters
  student: Student;
  coursesPossibleBSD: Course[];
  coursesPossibleCPA: Course[];
  coursesMatched: Course[];
  coursesSelected: Course[];

  // Get all the students
  studentGetAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.students}`);
  }

   //Get a specific student
   studentGetById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.students}/${id}`);
  }

  // Get all courses
  courseGetAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.courses}`);
  }

  // Get all BSD courses
  courseGetBSD(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.coursesBSD}`);
  }

  // Get all CPA courses
  courseGetCPA(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.coursesCPA}`);
  }

  //put to save the selected cart
  cartSave(id: string, newItem: emptyStudent): Observable<any> {
    return this.http.put<any>(`${this.students}/${id}/cart/saved`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: any) => console.log(`savedCart ${newItem}`)),
        catchError(this.handleError<any>('User edit'))
      );
  }
  confirmCart(id: string, newItem: emptyStudent[]): Observable<any> {
    return this.http.put<any>(`${this.students}/${id}/cart/confirmed`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: any) => console.log(`Edited item ${newItem}`)),
        catchError(this.handleError<any>('User edit'))
      );
  }
}
