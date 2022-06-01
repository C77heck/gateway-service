import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

// router.use(setHeaders);

router.all('/*', [], userController);

export default router;
