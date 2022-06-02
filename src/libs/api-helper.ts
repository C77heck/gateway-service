import axios, { AxiosRequestHeaders, Method } from 'axios';

export interface RepositoryRequest {
  url?: string;
  method?: Method | string;
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  params?: any;
  data?: object;
}

export class Repository {
  public port?: string;
  public baseUrl = process.env.BASE_URL;
  public appPath: string;

  // TODO -> port is there to define which application we are targeting
  public constructor(port?: string) {
    this.port = port;
    this.appPath = `${this.baseUrl}${port}`;
  }

  public async request(requestOptions: RepositoryRequest) {
    requestOptions.headers = { 'Accept': '*/*' };
    requestOptions.baseURL = `${this.appPath}${requestOptions.baseURL}`;

    return await new Promise((resolve, reject) => {
      try {
        resolve(axios(requestOptions));
      } catch (err) {
        reject(err);
      }
    });
  }

  public static async authenticate(token: string): Promise<boolean> {
    try {
      await axios({
        baseURL: `${process.env.USER_SERVICE_AUTH}`,
        method: 'GET',
        headers: { 'Accept': '*/*', Bearer: token }
      });
      return true;
    } catch (err) {
      return false;
    }
  }
}
