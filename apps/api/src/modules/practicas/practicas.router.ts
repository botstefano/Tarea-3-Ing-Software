import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { TrpcService } from '../../trpc/trpc.service';
import { z } from 'zod';

@Injectable()
export class PracticasRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly prisma: PrismaService,
  ) {}

  public router = this.trpc.router({
    listarOfertas: this.trpc.procedure
      .query(async () => {
        return this.prisma.practica.findMany({
          include: { empresa: true },
          where: { estado: 'PENDIENTE' },
        });
      }),

    postular: this.trpc.procedure
      .input(z.object({
        estudianteId: z.string().uuid(),
        practicaId: z.string().uuid(),
      }))
      .mutation(async ({ input }) => {
        // Lógica de postulación
        return { success: true };
      }),

    misPracticas: this.trpc.procedure
      .input(z.object({ estudianteId: z.string().uuid() }))
      .query(async ({ input }) => {
        return this.prisma.practica.findMany({
          where: { estudianteId: input.estudianteId },
          include: { empresa: true, asesor: true },
        });
      }),
  });
}
