export default interface HttpServer {
  route(
    method: string,
    url: string,
    callback: (params: unknown, body: unknown) => void
  ): void;
}
