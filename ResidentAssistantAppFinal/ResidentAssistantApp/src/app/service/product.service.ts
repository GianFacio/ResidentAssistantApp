// Imports injectable
import { Injectable } from '@angular/core';

// Imports httpclient
import { HttpClient } from '@angular/common/http';
// Imports brand model
import { Brand } from '../models/brands.model';
// Imports Student model
import { Student } from '../models/students.model';

// Import TEAM
import { Team } from '../models/team.model';

//import Calendar
import { Calendar } from '../models/calendar.model';
import { StudentInterface } from '../models/StudentInterface';
import { CalendarInterface } from '../models/CalendarInterface';
import { hostname } from 'os';


//defines class as service
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService
{
  constructor(private http: HttpClient) { }
  private host = "http://localhost:3000";

  // Returns Student criteria
  public getBrands(callback: (brand: Brand[]) => void): void
  {
    this.http.get<Brand[]>("/brands").
      subscribe((brands: Brand[]) =>
      {
        callback(brands);
      });
  }

  // Returns all students
  public getStudents(callback: (students: Student[]) => void): void
  {
    this.http.get<Student[]>("/students").
      subscribe((student: Student[]) =>
      {
        callback(student);
      });
  }

  // Returns specific student
  public getStudentOfBrand(brandName: String, callback: (students: Student[]) => void): void
  {
    let request = `/students/${brandName}`;
    console.log('request', request);
    this.http.get<Student[]>(request).
      subscribe((students: Student[]) =>
      {
        console.log('have students', students);
        callback(students);
      });
  }

  // Creates student for database
  public createStudent(student: StudentInterface, callback: () => void): void
  {
    this.http.post<StudentInterface>("/students", student).
      subscribe((data) =>
      {
        callback();
      });
  }

  // Updates Student
  public updateStudent(student: Student, callback: () => void): void
  {
    this.http.put<Student>("/students", student).
      subscribe((data) =>
      {
        callback();
      });
  }

  // Deletes Student
  public deleteStudent(studentId: number, callback: () => void): void
  {
    this.http.delete<Student>("/students/" + studentId).
      subscribe((data) =>
      {
        callback();
      });
  }

  // Returns TEAM
  public getTeam(callback: (team: Team[]) => void): void
  {
    this.http.get<Team[]>("/team").
      subscribe((team: Team[]) =>
      {
        callback(team);
      });
  }

  // Returns Calendar events
  public getCalendar(callback: (calendar: Calendar[]) => void): void
  {
    this.http.get<Calendar[]>("/calendar").
      subscribe((calendar: Calendar[]) =>
      {
        callback(calendar);
      });
  }

  // Creates Calendar events
  public createCalendar(calendar: CalendarInterface, callback: () => void): void
  {
    this.http.post<CalendarInterface>("/calendar", calendar).
      subscribe((data) =>
      {
        callback();
      });
  }

  // Deletes Calendar events
  public deleteCalendar(calendarId: number, callback: () => void): void
  {
    this.http.delete<Calendar>("/calendar/" + calendarId).
      subscribe((data) =>
      {
        callback();
      });
  }
}

