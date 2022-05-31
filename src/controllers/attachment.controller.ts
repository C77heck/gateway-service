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
    }, (response) => {
      console.log({ response });
    })).on('response', (resi) => console.log('see how to get the response from the api'));

    // res.send(response.data);
  } catch (e) {
    console.log(e);
    return next(new HttpError(ERROR_MESSAGES.GENERIC));
  }
};
// };
// (error, response, body) => {
//   // body is the decompressed response body
//   // 此处可对返回数据进行处理等
//   // console.log(body);
// };
// ).
// on('response', response => {
//   // unmodified http.IncomingMessage object
//   res.writeHead(response.statusCode, response.headers);
//   response.pipe(res);
// });
