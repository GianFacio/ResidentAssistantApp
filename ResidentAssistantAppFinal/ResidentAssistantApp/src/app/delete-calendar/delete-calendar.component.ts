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


  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {}

  // Calendar is being used to distinguish the criterial to delete from database
  calendar: Calendar = {
    calendarId: 1,
    eventName: '',
    eventTime: '',
    eventDate: '',
    eventLocation: '',
    materials: []
  };


  // On submit the action will be called and event will be deleted from database
  public onSubmit()
  {
    this.service.deleteCalendar(this.calendar.calendarId, () => void{});
  }

}
