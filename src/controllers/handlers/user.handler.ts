import { HandlerInterface } from './handler.interface';

export const userHandler: HandlerInterface[] = [
  {
    url: '/api/users/authenticate',
    method: 'GET',
    params: false,
    authorized: false
  },
  {
    url: '/api/users/login',
    method: 'POST',
    params: false,
    authorized: false
  },
  {
    url: '/api/users/signup',
    method: 'POST',
    params: false,
    authorized: false
  },
  {
    url: '/api/users/whoami',
    method: 'GET',
    params: true,
    authorized: true
  },
  {
    url: '/api/users/get-recruiters',
    method: 'GET',
    params: false,
    authorized: true
  },
  {
    url: '/api/users/get-job-seekers',
    method: 'GET',
    params: false,
    authorized: true
  },
  {
    url: '/api/users/get-user-data',
    method: 'GET',
    params: true,
    authorized: true
  },
  {
    url: '/api/users/get-security-question',
    method: 'GET',
    params: true,
    authorized: true
  },
  {
    url: '/api/users/update',
    method: 'PUT',
    params: true,
    authorized: true
  },
  {
    url: '/api/users/delete-account',
    method: 'DELETE',
    params: true,
    authorized: true
  }
];
