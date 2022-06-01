import express, { NextFunction } from 'express';
import { request } from 'http';
import { ERROR_MESSAGES } from '../libs/constants';
import { HttpError } from '../models/http.error';
import { attachmentHandler } from './handlers/attachment.handler';
import { validate } from './libs/endpoint-validator';
import { ReqObject } from './libs/req.object';

export const attachmentController = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const { originalUrl, method } = new ReqObject(req);

    validate(originalUrl, method, attachmentHandler, res);
    
    req.pipe(request({
      method: req.method,
      headers: req.headers,
      host: 'localhost',
      port: 3030,
      path: originalUrl,
    })).on('response', (response) => {
      res.writeHead((response as any)?.statusCode || 200, response.headers);

      response.pipe(res);
    });
  } catch (e) {
    return next(new HttpError(ERROR_MESSAGES.GENERIC));
  }
};
