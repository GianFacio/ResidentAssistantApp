import { Material } from "../materials/materials.model";

export interface Student {
    studentId: number,
    firstName: string,
    lastName: string,
    room: string,
    phone: string,
    grade: string,
    materials: Material[]
}