import { ServerRequest } from "https://deno.land/std@0.140.0/http/server.ts";

export default (req: ServerRequest) => {
  req.respond({ body: `Hello, from Deno v${Deno.version.deno}!` });
};
