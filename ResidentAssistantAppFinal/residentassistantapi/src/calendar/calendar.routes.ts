import { Router } from "express";
import * as CalendarController from './calendar.controller';

const router = Router();
router.
    route('/calendar').
    get(CalendarController.readCalendar);
router.
    route('/calendar').
    post(CalendarController.createCalendar);

router.
    route('/calendar').
    put(CalendarController.updateCalendar);

router.
    route('/calendar/:calendarId').
    delete(CalendarController.deleteCalendar);

export default router;