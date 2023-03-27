export const calendarQueries = {
    readCalendar: `
        SELECT
            id as calendarId, eventName AS eventName, eventTime as eventTime, eventDate AS eventDate, 
                eventLocation AS eventLocation
        FROM product.calendar
    `,
    readCalendarsByCalendarId: `
        SELECT
            id as calendarId, eventName AS eventName, eventTime as eventTime, eventDate AS eventDate, 
            eventLocation AS eventLocation
        FROM product.calendar
        WHERE product.calendar.id = ?
    `,
    createCalendar: `
        INSERT INTO CALENDAR(eventName, eventTime, eventDate, eventLocation) VALUES(?,?,?,?) 
    `,
    updateCalendar: `
        UPDATE product.calendar
        SET eventName = ?, eventTime = ?, eventDate = ?, eventLocation = ?
        WHERE id = ?
    `,
    deleteCalendar: `
        DELETE FROM product.calendar
        WHERE id = ?
    `,
}