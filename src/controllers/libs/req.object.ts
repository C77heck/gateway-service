import express from 'express';

interface ParsedUrl {
  "protocol": string | null,
  "slashes": string | null,
  "auth": string | null,
  "host": string | null,
  "port": string | null,
  "hostname": string | null,
  "hash": string | null,
  "search": string | null,
  "query": string | null,
  "pathname": string,
  "path": string,
  "href": string,
  "_raw": string
}

export interface ReqObject {
  url: string;
  method: string;
  baseUrl: string;
  originalUrl: string;
  _parsedUrl: ParsedUrl;
  params: object;
  query: object;
}

export class ReqObject implements ReqObject {
  public constructor(request: express.Request) {
    this.url = request.url;
    this.method = request.method;
    this.baseUrl = request.baseUrl;
    this.originalUrl = request.originalUrl;
    this._parsedUrl = (request as any)?._parsedUrl || {};
    this.params = request.params;
    this.query = request.query;
  }
}
