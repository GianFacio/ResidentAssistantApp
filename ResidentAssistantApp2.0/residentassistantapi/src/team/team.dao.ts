import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Team } from './team.model';
import { teamQueries } from './team.queries';

export const readStudents = async () => {
    return execute<Team[]>(teamQueries.readTeam, []);
};
