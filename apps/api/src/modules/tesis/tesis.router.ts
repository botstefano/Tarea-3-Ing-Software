import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { TrpcService } from '../../trpc/trpc.service';
import { z } from 'zod';

@Injectable()
export class TesisRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly prisma: PrismaService,
  ) {}

  public router = this.trpc.router({
    listarTesis: this.trpc.procedure
      .query(async () => {
        return this.prisma.tesis.findMany({
          include: { estudiante: true, asesor: true },
        });
      }),

    registrarProyecto: this.trpc.procedure
      .input(z.object({
        estudianteId: z.string().uuid(),
        titulo: z.string().min(10),
        descripcion: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return this.prisma.tesis.create({
          data: {
            estudianteId: input.estudianteId,
            titulo: input.titulo,
            descripcion: input.descripcion,
            estado: 'PROYECTO',
          },
        });
      }),
  });
}
