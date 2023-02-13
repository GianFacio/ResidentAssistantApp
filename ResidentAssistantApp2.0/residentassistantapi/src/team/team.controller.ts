import { Request, RequestHandler, Response } from "express";
import { Team } from './team.model';
import * as TeamDAO from './team.dao';
import { OkPacket } from "mysql";


export const readTeam: RequestHandler =async (req: Request, res: Response) => {
    try {
        let team;
        let teamId = parseInt(req.query.studentId as string);
        
        console.log('teamId', teamId);
        if (Number.isNaN(teamId)) {
            team = await TeamDAO.readStudents();
        } else {
            console.log("Team")
        }
        res.status(200).json(
            team
        );
    } catch (error) {
        console.error('[team.controller][readTeam][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching team'
        });
    }
};