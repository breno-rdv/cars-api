export type HttpRequest = {
  body: any;
};

export type HttpResponse = {
  statusCode: number;
  body: object | Error;
};
