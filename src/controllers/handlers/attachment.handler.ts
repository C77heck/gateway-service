import { HandlerInterface } from './handler.interface';

export const attachmentHandler: HandlerInterface[] = [
  {
    url: '/api/attachments',
    method: 'GET',
    params: {},
    query: {},
    authorized: true
  },
  {
    url: '/api/attachments/create',
    method: 'POST',
    params: {},
    query: {},
    authorized: true
  },
  {
    url: '/api/attachments/delete',
    method: 'DELETE',
    params: {},
    query: {},
    authorized: true
  }
];
