//http://localhost:8080/
//students schema
export class Student {
    _id: string;
    academicProgram: string;
    studentId: string;
    familyName: string;
    givenName: string;
    birthDate: Date;
    email: string;
    academicLevel: number;
    gpa: number;
    credits: Credits[];
    message: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];

  }
//course schema
  export class Course {
    _id: string;
    courseId: number;
    term: string;
    academicProgram: string;
    level: number;
    prerequisite: [];
    courseCode: string;
    section: string;
    termSectionId: number;
    enrolCapacity: number;
    enrolTotal: number;
    room: string;
    roomCapacity: number;
    classStart: string;
    classEnd: string;
    classMon: string;
    classTue: string;
    classWed: string;
    classThu: string;
    classFri: string;
    dateStart: string;
    dateEnd: string;
    professor: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];
  }
//credit schema
  class Credits {
    courseCode: string;
    courseName: string;
    termCompleted: string;
    gradeEarned: string;
  }
  //new student schema
  export class emptyStudent {
    _id: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];
  }
//
  export class EmptyStudentResult {
    _id?: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];
  }