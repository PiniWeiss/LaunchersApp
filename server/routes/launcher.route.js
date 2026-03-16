import express from 'express';
import { createLauncher, getLaunchers } from '../controllers/launcher.controller.js';

const router = express.Router();

router.get('/', getLaunchers);
router.post('/', createLauncher);
// router.put('/', 'controller Function');
// router.delete('/', 'controller Function');

export default router;