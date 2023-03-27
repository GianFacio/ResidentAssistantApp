import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Student } from './students.model';
import { studentQueries } from './students.queries';

export const readStudents = async () => {
    return execute<Student[]>(studentQueries.readStudents, []);
};

export const readStudentsByStudentId = async (studentId: number) => {
    return execute<Student[]>(studentQueries.readStudentsByStudentId, [studentId]);
};

export const createStudent = async (student: Student) => {
    return execute<OkPacket>(studentQueries.createStudent,
        [student.firstName,student.lastName, student.room, student.phone, student.grade]);
};

export const updateStudent = async (student: Student) => {
    return execute<OkPacket>(studentQueries.updateStudent,
        [student.firstName,student.lastName, student.room, student.phone, student.grade, student.studentId])
};

export const deleteStudent = async (studentId: number) => {
    return execute<OkPacket>(studentQueries.deleteStudent, [studentId]);
};