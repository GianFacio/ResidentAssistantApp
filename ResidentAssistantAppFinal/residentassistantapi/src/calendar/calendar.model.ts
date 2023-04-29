import { Material } from "../materials/materials.model";

export interface Calendar {
    calendarId: number,
    eventName: string,
    eventTime: string,
    eventDate: string,
    eventLocation: string,
    materials: Material[]
}