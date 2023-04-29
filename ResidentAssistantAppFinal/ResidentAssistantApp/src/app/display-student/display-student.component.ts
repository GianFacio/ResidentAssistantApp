import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/students.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(private router: Router ) { }

  // Student is pulled from models to showcase the information needed to display
  @Input()
  student!: Student;

  ngOnInit(): void {
  }

}

