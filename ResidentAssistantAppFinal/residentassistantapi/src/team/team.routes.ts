import { Router } from "express";
import * as TeamController from './team.controller';

const router = Router();
router.
    route('/team').
    get(TeamController.readTeam);
router.
    route('/team').
    post(TeamController.createTeam);

router.
    route('/team').
    put(TeamController.updateTeam);

router.
    route('/team/:teamId').
    delete(TeamController.deleteTeam);

export default router;