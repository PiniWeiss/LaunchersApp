import express from 'express';
import { deleteUser, getAllUsers, getConnectedUser, login, registerUser, updateUser } from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.middleware.js';


const router = express.Router();

router.get('/users', auth(["admin"]), getAllUsers);
router.get('/getuser', auth(["admin", "airSoldier", "intelligenceSoldier"]), getConnectedUser);
router.post('/register/create', auth(["admin"]), registerUser);
router.post('/login', login);
router.put('/register/update', auth(["admin"]), updateUser);
router.delete('/delete/:id', auth(["admin"]), deleteUser);

export default router;