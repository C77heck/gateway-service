export interface HandlerInterface {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
  params: boolean;
  authorized: boolean;
}
