import express from 'express';
import { HandlerInterface } from '../handlers/handler.interface';

export const validate = (baseUrl: string, method: string, attachmentHandler: HandlerInterface[], res: express.Response) => {
  // TODO -> the  check here is insufficient. it will let pass a lot of other types of requests.
  // it takes the last one as param no matter what. we need to differentiate between them
  // but worst comes worst just move over to query params and that will solve it.
  const isValid = !attachmentHandler.find((handler) => {
    const url = handler.params ? baseUrl.slice(0, baseUrl.lastIndexOf('/')) : baseUrl;

    return handler.url === url && handler.method === method;
  });

  return isValid ? res.end() : null;
};
