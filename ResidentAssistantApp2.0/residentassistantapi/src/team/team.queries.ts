export const teamQueries = {
    readTeam: `
        SELECT
            id as teamId, month AS month, budget as budget, teamTime AS teamTime, 
                meeting AS meeting
        FROM product.team
    `
}