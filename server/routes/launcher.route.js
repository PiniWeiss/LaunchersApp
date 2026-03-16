import express from 'express';
import { createLauncher, deleteLauncher, getLauncherById, getLaunchers } from '../controllers/launcher.controller.js';

const router = express.Router();

router.get('/', getLaunchers);
router.get('/:id', getLauncherById);
router.delete('/:id', deleteLauncher);
router.post('/', createLauncher);
// router.put('/', 'controller Function');

export default router;