import { Repository } from '../../libs/api-helper';
import { ERROR_MESSAGES } from '../../libs/constants';
import { HttpError } from '../../models/http.error';
import { HandlerInterface } from '../handlers/handler.interface';

export const validate = async (baseUrl: string, method: string, attachmentHandler: HandlerInterface[], token?: string): Promise<void> => {
  const route = attachmentHandler.find((handler) => {
    const url = handler.params ? baseUrl.slice(0, baseUrl.lastIndexOf('/')) : baseUrl;

    return handler.url === url && handler.method === method;
  });

  let isValid = !!route;

  if (route && route.authorized) {
    isValid = await Repository.authenticate(`${token}`);
  }

  if (!isValid) {
    throw new HttpError(ERROR_MESSAGES.FAILED_AUTH, 403);
  }
};
