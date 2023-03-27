//imports injectable
import { Injectable } from '@angular/core';

//imports httpclient
import { HttpClient } from '@angular/common/http';
//imports artist model
import { Brand } from '../models/brands.model';
//imports album model
import { Student } from '../models/students.model';

//import team
import { Team } from '../models/team.model';

//import team
import { Calendar } from '../models/calendar.model';

//imports albumCreate model
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

  //creates a new album array and sets it to exampledata


  //creates a new host variable and assigns it to localhost
  private host = "http://localhost:3000";

  //returns all artists
  public getBrands(callback: (brand: Brand[]) => void): void
  {
    this.http.get<Brand[]>("/brands").
      subscribe((brands: Brand[]) =>
      {
        callback(brands);
      });
  }

  //returns all albums
  public getStudents(callback: (students: Student[]) => void): void
  {
    this.http.get<Student[]>("/students").
      subscribe((student: Student[]) =>
      {
        callback(student);
      });
  }

  //returns specific album
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

  //creates album
  public createStudent(student: StudentInterface, callback: () => void): void
  {
    this.http.post<StudentInterface>("/students", student).
      subscribe((data) =>
      {
        callback();
      });
  }

  //updates desired album
  public updateStudent(student: Student, callback: () => void): void
  {
    this.http.put<Student>("/students", student).
      subscribe((data) =>
      {
        callback();
      });
  }

  //deletes albums
  public deleteStudent(studentId: number, callback: () => void): void
  {
    this.http.delete<Student>("/students/" + studentId).
      subscribe((data) =>
      {
        callback();
      });
  }

  public getTeam(callback: (team: Team[]) => void): void
  {
    this.http.get<Team[]>("/team").
      subscribe((team: Team[]) =>
      {
        callback(team);
      });
  }

  public getCalendar(callback: (calendar: Calendar[]) => void): void
  {
    this.http.get<Calendar[]>("/calendar").
      subscribe((calendar: Calendar[]) =>
      {
        callback(calendar);
      });
  }

  public createCalendar(calendar: CalendarInterface, callback: () => void): void
  {
    this.http.post<CalendarInterface>("/calendar", calendar).
      subscribe((data) =>
      {
        callback();
      });
  }
  public deleteCalendar(calendarId: number, callback: () => void): void
  {
    this.http.delete<Calendar>("/calendar/" + calendarId).
      subscribe((data) =>
      {
        callback();
      });
  }
}

