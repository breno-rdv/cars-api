export type Request = object | null;

export type Response = {
  statusCode: number;
  body: object | Error;
};
