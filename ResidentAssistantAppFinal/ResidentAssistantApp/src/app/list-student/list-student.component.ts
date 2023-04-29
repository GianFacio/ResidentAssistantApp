import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/students.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  // Filter to get names by search
  public filter: string | undefined;
  searchText: any;

  constructor(private service: ProductServiceService) {}

  @Input() student: Student | undefined;
  students: Student[] = [];
  selectedStudent: Student | null = null;

  ngOnInit(): void {
    this.service.getStudents(
      (students: Student[]) => (this.students = students)
    );
    console.log('All of the students are now displayed',this.students);
  }

  onSelectStudent(student: Student) {
    this.selectedStudent = student;
  }
}
