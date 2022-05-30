import express from 'express';
import { attachmentController } from '../controllers/attachment.controller';

const router = express.Router();

router.all('/*', [], attachmentController);

export default router;
