import { Injectable, OnModuleInit } from '@nestjs/common';
import { initTRPC, TRPCError } from '@trpc/server';
import { ZodError } from 'zod';

@Injectable()
export class TrpcService {
  readonly t = initTRPC.create({
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
      };
    },
  });

  public procedure = this.t.procedure;
  public router = this.t.router;
  public mergeRouters = this.t.mergeRouters;
}
