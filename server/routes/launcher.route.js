import express from 'express';
import { createLauncher, deleteLauncher, getLauncherById, getLaunchers } from '../controllers/launcher.controller.js';
import { auth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/',auth(["admin","airSoldier", "intelligenceSoldier"]), getLaunchers);
router.get('/:id',auth(["admin","airSoldier", "intelligenceSoldier"]), getLauncherById);
router.delete('/:id',auth(["admin", "intelligenceSoldier"]), deleteLauncher);
router.post('/', auth(["admin", "intelligenceSoldier"]), createLauncher);
// router.put('/', 'controller Function');

export default router;