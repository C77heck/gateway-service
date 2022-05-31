import express, { NextFunction } from 'express';
import { request } from 'http';
import { Repository } from '../libs/api-helper';
import { ERROR_MESSAGES } from '../libs/constants';
import { HttpError } from '../models/http.error';
import { attachmentHandler } from './handlers/attachment.handler';
import { validate } from './libs/endpoint-validator';
import { ReqObject } from './libs/req.object';

// TODO -> we need to test all the endpoints and see how we could manage them based around predefined requests.
// we will propably have to deal with the authentication on gateway side for this to work. and allow
// the underlying api services to function without that constraint.
export const attachmentController = async (req: express.Request, res: express.Response, next: NextFunction) => {
  const repository = new Repository(process.env.ATTACHMENT_PORT);
  try {
    const { axiosReqOptions, originalUrl, method } = new ReqObject(req);
    validate(originalUrl, method, attachmentHandler, res);

    // const response: any = await repository.request(axiosReqOptions);
    req.pipe(request({
      method: req.method,
      headers: req.headers,
      host: 'localhost',
      port: 3030,
      path: originalUrl,
    }, (messages) => {
      console.log({ messages: messages.statusMessage });
      // TODO -> ERRORS MUST BE FOUND
    })).on('response', (response) => {

      res.writeHead((response as any)?.statusCode || 200, response.headers);

      response.pipe(res);
    });
  } catch (e) {
    return next(new HttpError(ERROR_MESSAGES.GENERIC));
  }
};
