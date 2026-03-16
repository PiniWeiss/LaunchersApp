import express from 'express';
import { getLaunchers } from '../controllers/launcher.controller.js';

const router = express.Router();

router.get('/', getLaunchers);
// router.post('/', 'controller Function');
// router.put('/', 'controller Function');
// router.delete('/', 'controller Function');

export default router;