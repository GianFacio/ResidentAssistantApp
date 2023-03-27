import { Material } from './materials.model';
export interface CalendarInterface {
  eventName: string,
  eventTime: string,
  eventDate: string,
  eventLocation: string,
  materials: Material[]
}
