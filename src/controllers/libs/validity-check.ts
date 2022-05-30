import { HandlerInterface } from '../handlers/handler.interface';

export const getIsValid = (baseUrl: string, method: string, attachmentHandler: HandlerInterface[]): boolean => {
  const url = baseUrl.slice(0, baseUrl.lastIndexOf('/'));

  return !attachmentHandler.find((handler) => handler.url === url && handler.method === method);
};
