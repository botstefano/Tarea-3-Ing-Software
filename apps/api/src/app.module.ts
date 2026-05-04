import { Module } from '@nestjs/common';
import { TrpcService } from './trpc/trpc.service';
import { TrpcRouter } from './trpc/trpc.router';
import { TrpcController } from './trpc/trpc.controller';
import { PrismaService } from './common/prisma.service';
import { AuthRouter } from './modules/auth/auth.router';
import { PracticasRouter } from './modules/practicas/practicas.router';
import { TesisRouter } from './modules/tesis/tesis.router';

@Module({
  imports: [],
  controllers: [TrpcController],
  providers: [
    TrpcService, 
    TrpcRouter, 
    PrismaService,
    AuthRouter,
    PracticasRouter,
    TesisRouter,
  ],
})
export class AppModule {}
