import { z } from "zod";
import { HttpRequest, HttpResponse } from "../protocols/http";

type Constructor = { new (...args: any[]): any };

export function ValidateRequestBody(schema: z.ZodType) {
  return function (target: Constructor) {
    const originalHandle = target.prototype.handle;

    target.prototype.handle = async function (
      request: HttpRequest
    ): Promise<HttpResponse> {
      try {
        const validatedBody = schema.parse(request.body);
        request.body = validatedBody;
        return await originalHandle.call(this, request);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return {
            statusCode: 400,
            body: {
              message: "Validation error",
              errors: error.errors,
            },
          };
        }
        throw error;
      }
    };
  };
}
