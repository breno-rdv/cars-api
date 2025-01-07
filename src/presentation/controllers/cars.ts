type Request = object;

type Response = {
  statusCode: number;
  body: object | Error;
};

export class CarsController {
  handle(request: Request): Response {
    if (!request) {
      return {
        statusCode: 400,
        body: new Error("error"),
      };
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}
