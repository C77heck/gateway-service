import express, { NextFunction } from 'express';
import { request } from 'http';
import { ERROR_MESSAGES } from '../libs/constants';
import { HttpError } from '../models/http.error';
import { userHandler } from './handlers/user.handler';
import { validate } from './libs/endpoint-validator';
import { ReqObject } from './libs/req.object';

export const userController = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const { originalUrl, method } = new ReqObject(req);

    validate(originalUrl, method, userHandler, res);
    req.pipe(request({
      method: req.method,
      headers: req.headers,
      host: 'localhost',
      port: 3033,
      path: originalUrl,
    }))
      .on('error', (error) => console.log('error'))
      .on('finish', () => console.log('finish'))
      .on('response', (response) => {
        console.log('we are hitting it');
        res.writeHead((response as any)?.statusCode || 200, response.headers);

        response.pipe(res);
      });

  } catch (e) {
    console.log(e);
    return next(new HttpError(ERROR_MESSAGES.GENERIC));
  }
};
