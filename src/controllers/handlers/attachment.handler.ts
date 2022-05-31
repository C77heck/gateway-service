import { HandlerInterface } from './handler.interface';

export const attachmentHandler: HandlerInterface[] = [
  {
    url: '/api/attachments',
    method: 'GET',
    params: true,
    authorized: true
  },
  {
    url: '/api/attachments/create',
    method: 'POST',
    params: false,
    authorized: true
  },
  {
    url: '/api/attachments/delete',
    method: 'DELETE',
    params: true,
    authorized: true
  }
];
