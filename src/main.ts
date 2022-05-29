import cors from 'cors';
import express from 'express';
import Mongoose from 'mongoose';
import { setEnvs } from './libs/set-up.environment';
// eslint-disable-next-line import/extensions
import apiRouter from './routes/router';
// Constants
const app = express();
setEnvs();

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/
app.use(cors());
// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
app.use('/api', apiRouter);

/***********************************************************************************
 *                         Server initialisation
 **********************************************************************************/

(async () => {
  try {
    const port = process.env.PORT || 3031;

    await app.listen(port, () => console.log(`app is listening on port: ${port}`));
  } catch (e) {
    console.log(e);
  }
})();