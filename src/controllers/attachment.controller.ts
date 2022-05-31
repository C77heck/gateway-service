import express, { NextFunction } from 'express';
import { Repository } from '../libs/api-helper';
import { ERROR_MESSAGES } from '../libs/constants';
import { HttpError } from '../models/http.error';
import { attachmentHandler } from './handlers/attachment.handler';
import { ReqObject } from './libs/req.object';
import { getIsValid } from './libs/validity-check';

// TODO -> we need to test all the endpoints and see how we could manage them based around predefined requests.
// we will propably have to deal with the authentication on gateway side for this to work. and allow
// the underlying api services to function without that constraint.
export const attachmentController = async (req: express.Request, res: express.Response, next: NextFunction) => {
  const repository = new Repository(process.env.ATTACHMENT_PORT);

  try {
    const { axiosReqOptions, originalUrl, method } = new ReqObject(req);

    if (getIsValid(originalUrl, method, attachmentHandler)) {
      res.end();
    }
    axiosReqOptions.headers = { 'Content-Type': 'multipart/form-data' };
    axiosReqOptions.data = { 'Content-Type': 'multipart/form-data' };
    const response: any = await repository.request(axiosReqOptions);

    res.send(response.data);
  } catch (e) {
    return next(new HttpError(ERROR_MESSAGES.GENERIC));
  }
};
