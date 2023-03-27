import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product.service';
import { Calendar } from '../models/calendar.model'

@Component({
  selector: 'app-delete-calendar',
  templateUrl: './delete-calendar.component.html',
  styleUrls: ['./delete-calendar.component.css']
})
export class DeleteCalendarComponent implements OnInit {

  calendar: Calendar = {
    calendarId: 1,
    eventName: '',
    eventTime: '',
    eventDate: '',
    eventLocation: '',
    materials: []
  };

  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {}

  public onSubmit()
  {
    this.service.deleteCalendar(this.calendar.calendarId, () => void{});
  }

}
