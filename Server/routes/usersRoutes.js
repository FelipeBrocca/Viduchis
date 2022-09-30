import express from 'express';

import { usersController } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.profile);
router.post('/', usersController.register);
router.put('/:id', usersController.updateProfile);
router.delete('/:id', usersController.deleteUser);

export default router;