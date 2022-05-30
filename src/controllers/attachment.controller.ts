import express, { NextFunction } from 'express';
import { Repository } from '../libs/api-helper';
import { ERROR_MESSAGES } from '../libs/constants';
import { HttpError } from '../models/http.error';
import { attachmentHandler } from './handlers/attachment.handler';
import { ReqObject } from './libs/req.object';
import { getIsValid } from './libs/validity-check';

const repository = new Repository(process.env.ATTACHMENT_PORT);

// TODO -> we need to test all the endpoints and see how we could manage them based around predefined requests.
// we will propably have to deal with the authentication on gateway side for this to work. and allow
// the underlying api services to function without that constraint.
export const attachmentController = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const { originalUrl, method, params, query } = new ReqObject(req);

    if (getIsValid(originalUrl, method, attachmentHandler)) {
      res.send();
    }

    const response = await repository.fetch({ method, baseURL: originalUrl, params: query });
    console.log(response);
    res.end();
  } catch (e) {
    return next(new HttpError(ERROR_MESSAGES.GENERIC));
  }
};
