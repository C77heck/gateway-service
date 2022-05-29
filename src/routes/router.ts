import { Router } from 'express';
import apiRoutes from './api.routes';
import attachmentRoutes from './attachment.routes';
import userRoutes from './user.routes';
// Export the base-router
const baseRouter = Router();
// Setup routers
baseRouter.use('/user', userRoutes);
baseRouter.use('/attachments', attachmentRoutes);
baseRouter.use('/api', apiRoutes);

// Export default.
export default baseRouter;
