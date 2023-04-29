import { Request, RequestHandler, Response } from "express";
import { Team } from './team.model';
import * as TeamDao from './team.dao';
import { OkPacket } from "mysql";
import { Material } from "../materials/materials.model";
import * as MaterialsDao from '../materials/materials.dao'

// Read all TEAM 
export const readTeam: RequestHandler =async (req: Request, res: Response) => {
    try {
        let team;
        let teamId = parseInt(req.query.teamId as string);
        
        console.log('teamId', teamId);
        if (Number.isNaN(teamId)) {
            team = await TeamDao.readTeam();
        } else {
            team= await TeamDao.readTeamByTeamId(teamId);
        }
        await readMaterials (team, res);

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

// Create TEAM month
export const createTeam: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await TeamDao.createTeam(req.body);

        console.log('req.body', req.body);

        console.log('team', okPacket);

        req.body.materials.forEach(async(materials: Material, index: number) => {
            try {
              await MaterialsDao.createMaterial(materials, index, okPacket.insertId);
            } catch (error) {
                console.error('[team.controller][createTeamMaterials][Error]', error);
                res.status(500).json({
                    message: 'There was an error when writing team materials'
                });
            }
        });;

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[team.controller][createTeam][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating team'
        });
    }
};

// Update TEAM month
export const updateTeam: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await TeamDao.updateTeam(req.body);

        console.log('req.body', req.body);

        console.log('team', okPacket);

        req.body.material.forEach(async(material: Material, index: number) => {
            try {
                await MaterialsDao.createMaterial(material, index, okPacket.insertId);
            } catch (error) {
                console.error('[team.controller][updateTeam][Error]', error);
                res.status(500).json({
                    message: 'There was an error when writing team material'
                });
            }
        });;

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[team.controller][updateTeam][Error]', error);
        res.status(500).json({
            message: 'Updated'
        });
    }
};

// Read all materials
async function readMaterials(team: Team[], res: Response<any, Record<string, any>>) {
    for (let i = 0; i < team.length; i++) {
        try {
            const materials = await MaterialsDao.readMaterials(team[i].teamId);
            team[i].materials = materials;

        } catch (error) {
            console.error('[team.controller][readMaterials][Error] ', error);
            res.status(500).json({
                message: 'There was an error when fetching materials'
            });
        }
    }
}

// Delete TEAM month
export const deleteTeam: RequestHandler = async (req: Request, res: Response) => {
    try {
        let teamId = parseInt(req.params.shoeId as string);

        console.log('teamId', teamId);
        if (!Number.isNaN(teamId)) {
            const response = await TeamDao.deleteTeam(teamId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for teamId");
        }

    } catch (error) {
        console.error('[team.controller][deleteTeam][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting team'
        });
    }
}

