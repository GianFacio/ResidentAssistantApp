export const teamQueries = {
    readTeam: `
        SELECT
            id as teamId, month AS month, budget as budget, teamTime AS teamTime, 
                meeting AS meeting
        FROM product.team
    `,
    readTeamByTeamId: `
        SELECT
            id as teamId, month AS month, budget as budget, teamTime AS teamTime, 
            meeting AS meeting
        FROM product.team
        WHERE product.team.id = ?
    `,
    createTeam: `
        INSERT INTO TEAM(month, budget, teamTime, meeting) VALUES(?,?,?,?) 
    `,
    updateTeam: `
        UPDATE product.team
        SET month = ?, budget = ?, teamTime = ?, meeting = ?
        WHERE id = ?
    `,
    deleteTeam: `
        DELETE FROM product.team
        WHERE id = ?
    `,
}