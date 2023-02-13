import { Router } from "express";
import * as TeamController from './team.controller';

const router = Router();
router.
    route('/team').
    get(TeamController.readTeam);

export default router;