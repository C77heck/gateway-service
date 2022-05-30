import express from 'express';
import { attachmentHandler } from '../controllers/attachment.controller';

const router = express.Router();

router.all('/*', [], attachmentHandler);

export default router;
