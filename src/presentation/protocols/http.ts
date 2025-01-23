export type HttpRequest = object | null;

export type HttpResponse = {
  statusCode: number;
  body: object | Error;
};
