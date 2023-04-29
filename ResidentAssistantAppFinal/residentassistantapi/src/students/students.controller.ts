import { Request, RequestHandler, Response } from "express";
import { Student } from './students.model';
import * as StudentDao from './students.dao';
import { OkPacket } from "mysql";
import { Material } from "../materials/materials.model";
import * as MaterialsDao from '../materials/materials.dao'

// Read all Students
export const readStudents: RequestHandler =async (req: Request, res: Response) => {
    try {
        let students;
        let studentId = parseInt(req.query.studentId as string);
        
        console.log('studentId', studentId);
        if (Number.isNaN(studentId)) {
            students = await StudentDao.readStudents();
        } else {
            students= await StudentDao.readStudentsByStudentId(studentId);
        }
        await readMaterials (students, res);

        res.status(200).json(
            students
        );
    } catch (error) {
        console.error('[students.controller][readStudents][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching students'
        });
    }
};

// Create Student
export const createStudent: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await StudentDao.createStudent(req.body);

        console.log('req.body', req.body);

        console.log('student', okPacket);

        req.body.materials.forEach(async(materials: Material, index: number) => {
            try {
              await MaterialsDao.createMaterial(materials, index, okPacket.insertId);
            } catch (error) {
                console.error('[students.controller][createStudentMaterials][Error]', error);
                res.status(500).json({
                    message: 'There was an error when writing student materials'
                });
            }
        });;

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[students.controller][createStudent][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating students'
        });
    }
};

// Update Student
export const updateStudent: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await StudentDao.updateStudent(req.body);

        console.log('req.body', req.body);

        console.log('student', okPacket);

        req.body.material.forEach(async(material: Material, index: number) => {
            try {
                await MaterialsDao.createMaterial(material, index, okPacket.insertId);
            } catch (error) {
                console.error('[students.controller][updateStudent][Error]', error);
                res.status(500).json({
                    message: 'There was an error when writing student material'
                });
            }
        });;

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[students.controller][updateStudent][Error]', error);
        res.status(500).json({
            message: 'Updated'
        });
    }
};

// Read all materials
async function readMaterials(students: Student[], res: Response<any, Record<string, any>>) {
    for (let i = 0; i < students.length; i++) {
        try {
            const materials = await MaterialsDao.readMaterials(students[i].studentId);
            students[i].materials = materials;

        } catch (error) {
            console.error('[students.controller][readMaterials][Error] ', error);
            res.status(500).json({
                message: 'There was an error when fetching materials tracks'
            });
        }
    }
}

// Delete Student
export const deleteStudent: RequestHandler = async (req: Request, res: Response) => {
    try {
        let studentId = parseInt(req.params.shoeId as string);

        console.log('studentId', studentId);
        if (!Number.isNaN(studentId)) {
            const response = await StudentDao.deleteStudent(studentId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for studentId");
        }

    } catch (error) {
        console.error('[student.controller][deleteStudent][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting students'
        });
    }
}