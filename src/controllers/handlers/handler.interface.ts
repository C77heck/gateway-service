
export interface HandlerInterface {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTION';
  params: object;
  query: object;
  authorized: boolean;
}
