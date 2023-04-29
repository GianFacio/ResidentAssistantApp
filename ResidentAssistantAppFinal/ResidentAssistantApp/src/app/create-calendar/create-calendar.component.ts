import { Component, OnInit } from '@angular/core';
import { CalendarInterface } from '../models/CalendarInterface';
import { Material } from '../models/materials.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.css']
})
export class CreateCalendarComponent implements OnInit {

  // New interface is created to add events to database, without id number
  calendar: CalendarInterface = {
    eventName: "",
    eventTime: "",
    eventDate: "",
    eventLocation: "",
    materials: [],
  };

  materialsRaw: string = "";
  wasSubmitted: boolean = false;

  constructor(private service: ProductServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let materials: Material[] = [];
    let materialsAll = this.materialsRaw.split('\n');
    for (let i = 0; i < materialsAll.length; ++i) {
      let eventName = "";
      let eventTime = "";
      let eventDate = "";
      let eventLocation = "";
      let materialInfo = materialsAll[i];
      let materialParts = materialInfo.split(':');
      if (materialParts.length == 4) {
        eventName = materialParts[0];
        eventTime = materialParts[1];
        eventDate = materialParts[2];
        eventLocation = materialParts[3];
      }
      else if (materialParts.length == 2) {
        eventName = materialParts[0];
        eventTime = materialParts[1];
        eventDate = materialParts[2];
      }
      else {
        eventName = materialParts[0];
      }
    }
    this.calendar.materials = materials;

    // Output to console in json format
    this.service.createCalendar(this.calendar, () => void{});
    this.wasSubmitted = true;
  }
}
