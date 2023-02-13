export const studentQueries = {
    readStudents: `
        SELECT
            id as studentId, firstName AS firstName, lastName as lastName, room AS room, 
                phone AS phone, grade AS grade
        FROM product.students
    `,
    readStudentsByStudentId: `
        SELECT
            id as studentId, firstName AS firstName, lastName as lastName, room AS room, 
            phone AS phone, grade AS grade
        FROM product.students
        WHERE product.students.id = ?
    `,
    createStudent: `
        INSERT INTO STUDENT(firstName, lastName, room, phone, grade) VALUES(?,?,?,?,?) 
    `,
    updateStudent: `
        UPDATE product.students
        SET firstName = ?, lastName = ?, room = ?, phone = ?, grade = ?
        WHERE id = ?
    `,
    deleteStudent: `
        DELETE FROM product.students
        WHERE id = ?
    `,
}