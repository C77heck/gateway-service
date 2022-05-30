import cors from 'cors';
import express from 'express';
import { setEnvs } from './libs/set-up.environment';
import router from './routes/router';

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

// app.use('/', router.all('/:apiName', (req, res) => console.log(req.params, 'yeah')));
app.use('/api', router);

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
