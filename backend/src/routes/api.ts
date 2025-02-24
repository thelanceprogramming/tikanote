import express from 'express';
import * as UserController from '../controllers/UserController';

const router = express.Router();

router.get("/users", UserController.index);

export default router;