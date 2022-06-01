import { Router } from 'express';
import apiRoutes from './api.routes';
import attachmentRoutes from './attachment.routes';
import userRoutes from './user.routes';

const baseRouter = Router();

baseRouter.use('/attachments', attachmentRoutes);
baseRouter.use('/users', userRoutes);
baseRouter.use('/api', apiRoutes);

// Export default.
export default baseRouter;
