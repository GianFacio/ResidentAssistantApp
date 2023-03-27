import { Request, RequestHandler, Response } from "express";
import { Calendar } from './calendar.model';
import * as CalendarDao from './calendar.dao';
import { OkPacket } from "mysql";
import { Material } from "../materials/materials.model";
import * as MaterialsDao from '../materials/materials.dao'

export const readCalendar: RequestHandler =async (req: Request, res: Response) => {
    try {
        let calendar;
        let calendarId = parseInt(req.query.calendarId as string);
        
        console.log('calendarId', calendarId);
        if (Number.isNaN(calendarId)) {
            calendar = await CalendarDao.readCalendar();
        } else {
            calendar= await CalendarDao.readCalendarsByCalendarId(calendarId);
        }
        await readMaterials (calendar, res);

        res.status(200).json(
            calendar
        );
    } catch (error) {
        console.error('[calendar.controller][readCalendar][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching calendar events'
        });
    }
};

export const createCalendar: RequestHandler = async (req: Request, res: Response) => {
        try {
            const okPacket: OkPacket = await CalendarDao.createCalendar(req.body);
    
            console.log('req.body', req.body);
    
            console.log('calendar', okPacket);
    
            req.body.materials.forEach(async(materials: Material, index: number) => {
                try {
                  await MaterialsDao.createMaterial(materials, index, okPacket.insertId);
                } catch (error) {
                    console.error('[shoes.controller][createShoeMaterials][Error]', error);
                    res.status(500).json({
                        message: 'There was an error when writing shoe materials'
                    });
                }
            });;
    
            res.status(200).json(
                okPacket
            );
        } catch (error) {
            console.error('[calendar.controller][createCalendar][Error]', error);
            res.status(500).json({
                message: 'There was an error when creating event'
            });
        }
    };

export const updateCalendar: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CalendarDao.updateCalendar(req.body);

        console.log('req.body', req.body);

        console.log('calendar', okPacket);

        req.body.material.forEach(async(material: Material, index: number) => {
            try {
                await MaterialsDao.createMaterial(material, index, okPacket.insertId);
            } catch (error) {
                console.error('[calendar.controller][updateCalendar][Error]', error);
                res.status(500).json({
                    message: 'There was an error when writing calendar material'
                });
            }
        });;

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[calendar.controller][updateCalendar][Error]', error);
        res.status(500).json({
            message: 'Updated'
        });
    }
};

async function readMaterials(calendar: Calendar[], res: Response<any, Record<string, any>>) {
    for (let i = 0; i < calendar.length; i++) {
        try {
            const materials = await MaterialsDao.readMaterials(calendar[i].calendarId);
            calendar[i].materials = materials;

        } catch (error) {
            console.error('[calendar.controller][readMaterials][Error] ', error);
            res.status(500).json({
                message: 'There was an error when fetching materials'
            });
        }
    }
}

export const deleteCalendar: RequestHandler = async (req: Request, res: Response) => {
    try {
        let calendarId = parseInt(req.params.shoeId as string);

        console.log('calendarId', calendarId);
        if (!Number.isNaN(calendarId)) {
            const response = await CalendarDao.deleteCalendar(calendarId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for calendarId");
        }

    } catch (error) {
        console.error('[calendar.controller][deleteCalendar][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting calendar'
        });
    }
}