import express from 'express';
import { Repository } from '../../libs/api-helper';
import { HandlerInterface } from '../handlers/handler.interface';

export const validate = async (baseUrl: string, method: string, attachmentHandler: HandlerInterface[], res: express.Response, token?: string) => {
  const route = attachmentHandler.find((handler) => {
    const url = handler.params ? baseUrl.slice(0, baseUrl.lastIndexOf('/')) : baseUrl;

    return handler.url === url && handler.method === method;
  });

  let isValid = !!route;

  if (route && route.authorized) {
    isValid = await Repository.authenticate(`${token}`);
  }
  console.log({ isValid });
  return isValid ? null : null; // res.end();
};
