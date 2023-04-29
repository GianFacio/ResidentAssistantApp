import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../models/calendar.model';


@Component({
  selector: 'app-list-calendar',
  templateUrl: './list-calendar.component.html',
  styleUrls: ['./list-calendar.component.css']
})
export class ListCalendarComponent implements OnInit {

  // Calendar is called from models to distinguish the information needed to display
  constructor(private router: Router ) { }

  @Input()
  calendar!: Calendar;

  ngOnInit(): void {
  }

}
