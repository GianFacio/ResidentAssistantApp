import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Team } from './team.model';
import { teamQueries } from './team.queries';

export const readTeam = async () => {
    return execute<Team[]>(teamQueries.readTeam, []);
};

export const readTeamByTeamId = async (teamId: number) => {
    return execute<Team[]>(teamQueries.readTeamByTeamId, [teamId]);
};

export const createTeam = async (team: Team) => {
    return execute<OkPacket>(teamQueries.createTeam,
        [team.month,team.budget, team.teamTime, team.meeting]);
};

export const updateTeam = async (team: Team) => {
    return execute<OkPacket>(teamQueries.updateTeam,
        [team.month,team.budget, team.teamTime, team.meeting, team.teamId])
};

export const deleteTeam = async (teamId: number) => {
    return execute<OkPacket>(teamQueries.deleteTeam, [teamId]);
};
