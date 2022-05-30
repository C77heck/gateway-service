import axios from 'axios';

export class Repository {
  public port: string;
  public baseUrl = process.env.BASE_URL;
  public appPath: string;

  // TODO -> port is there to define which application we are targeting
  public constructor(port: string) {
    this.port = port;
    this.appPath = `${this.baseUrl}${port}`;
  }

  public async get(href: string) {
    const path = `${this.appPath}/${href}`;
    return await new Promise((resolve, reject) => {
      try {
        const response = (axios as any).get(path, {
          headers: { 'Accept': 'application/json', },
          params: {}
        });
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  public async post(href: string) {
    const path = `${this.appPath}/${href}`;

    return await new Promise((resolve, reject) => {
      try {
        const response = (axios as any).get(path, {
          headers: { 'Accept': 'application/json', },
          params: {}
        });
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  public async put(href: string) {
    const path = `${this.appPath}/${href}`;

    return await new Promise((resolve, reject) => {
      try {
        const response = (axios as any).put(path, {
          headers: { 'Accept': 'application/json', },
          params: {}
        });
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  public async delete(href: string) {
    const path = `${this.appPath}/${href}`;

    return await new Promise((resolve, reject) => {
      try {
        const response = (axios as any).delete(path, {
          headers: { 'Accept': 'application/json', },
          params: {}
        });
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
