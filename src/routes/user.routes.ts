import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.all('/*', [], userController);

export default router;
