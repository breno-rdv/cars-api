import { z } from "zod";
import { HttpRequest, HttpResponse } from "../protocols/http";

export function ValidateRequestQuery(schema: z.ZodSchema) {
  return function (target: any) {
    const originalHandle = target.prototype.handle;

    target.prototype.handle = async function (
      request: HttpRequest
    ): Promise<HttpResponse> {
      try {
        const validatedQuery = schema.parse(request.query);
        request.query = validatedQuery;
        return await originalHandle.apply(this, [request]);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return {
            statusCode: 400,
            body: {
              error: "Validation error",
              details: error.errors,
            },
          };
        }
        throw error;
      }
    };
  };
}
