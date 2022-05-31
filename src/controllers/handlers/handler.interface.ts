export interface HandlerInterface {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTION';
  params: boolean;
  authorized: boolean;
}
