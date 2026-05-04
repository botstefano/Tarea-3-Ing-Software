import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { TrpcRouter } from './trpc.router';

@Controller('trpc')
export class TrpcController {
  constructor(private readonly trpcRouter: TrpcRouter) {}

  @All(':path')
  async handler(@Req() req: Request, @Res() res: Response) {
    const host = req.get('host');
    const protocol = req.protocol;
    const url = new URL(req.originalUrl, `${protocol}://${host}`);

    const response = await fetchRequestHandler({
      endpoint: '/trpc',
      req: new Request(url.toString(), {
        method: req.method,
        headers: req.headers as any,
        body: req.method === 'GET' || req.method === 'HEAD' ? null : JSON.stringify(req.body),
      }),
      router: this.trpcRouter.appRouter,
      createContext: () => ({}), // Add user context here later
    });

    res.status(response.status);
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.send(await response.text());
  }
}
