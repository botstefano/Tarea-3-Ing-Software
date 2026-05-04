import { Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { AuthRouter } from '../modules/auth/auth.router';
import { PracticasRouter } from '../modules/practicas/practicas.router';
import { TesisRouter } from '../modules/tesis/tesis.router';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly auth: AuthRouter,
    private readonly practicas: PracticasRouter,
    private readonly tesis: TesisRouter,
  ) {}

  public appRouter = this.trpc.router({
    auth: this.auth.router,
    practicas: this.practicas.router,
    tesis: this.tesis.router,
  });
}

export type AppRouter = TrpcRouter['appRouter'];
