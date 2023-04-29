import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from '../models/calendar.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // Calendar using filter system to pull from SQL and display events
  public filter: string | undefined;
  searchText: any;

  constructor(private service: ProductServiceService) {}

  @Input() calendar: Calendar | undefined;
  calendars: Calendar[] = [];
  selectedCalendar: Calendar | null = null;

  ngOnInit(): void {
    this.service.getCalendar(
      (calendars: Calendar[]) => (this.calendars = calendars)
    );
    console.log('All of the events are now displayed',this.calendars);
  }

  onSelectCalendar(calendar: Calendar) {
    this.selectedCalendar = calendar;
  }


}
