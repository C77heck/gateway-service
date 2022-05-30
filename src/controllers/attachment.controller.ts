import express, { NextFunction } from 'express';
import { ReqObject } from './libs/req.object';

export const attachmentHandler = async (req: express.Request, res: express.Response, next: NextFunction) => {
  const routeObject = new ReqObject(req);
  console.log(routeObject);
  // TODO -> we need to test all the endpoints and see how we could manage them based around predefined requests.
  // we will propably have to deal with the authentication on gateway side for this to work. and allow
  // the underlying api services to function without that constraint.
  res.json(routeObject);
};

// router.get('/:fileName', [], (req: any, res: any) => console.log('running the controller'));
// // fileUpload.single('file'),
// router.post('/create', [], (req: any, res: any) => console.log('running the controller'));
//
// router.delete('/delete/:fileName', [], (req: any, res: any) => console.log('running the controller'));
