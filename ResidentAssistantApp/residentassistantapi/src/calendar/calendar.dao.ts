import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Calendar } from './calendar.model';
import { calendarQueries } from './calendar.queries';

export const readCalendar = async () => {
    return execute<Calendar[]>(calendarQueries.readCalendar, []);
};

export const readCalendarsByCalendarId = async (calendarId: number) => {
    return execute<Calendar[]>(calendarQueries.readCalendarsByCalendarId, [calendarId]);
};

export const createCalendar = async (calendar: Calendar) => {
    return execute<OkPacket>(calendarQueries.createCalendar,
        [calendar.eventName, calendar.eventTime, calendar.eventDate, calendar.eventLocation]);
};

export const updateCalendar = async (calendar: Calendar) => {
    return execute<OkPacket>(calendarQueries.updateCalendar,
        [calendar.eventName,calendar.eventTime, calendar.eventDate, calendar.eventLocation, calendar.calendarId])
};

export const deleteCalendar = async (calendarId: number) => {
    return execute<OkPacket>(calendarQueries.deleteCalendar, [calendarId]);
};