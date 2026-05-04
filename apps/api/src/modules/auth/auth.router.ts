import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { TrpcService } from '../../trpc/trpc.service';
import { z } from 'zod';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly prisma: PrismaService,
    // private readonly jwtService: JwtService,
  ) {}

  public router = this.trpc.router({
    login: this.trpc.procedure
      .input(z.object({
        email: z.string().email(),
        password: z.string(),
      }))
      .mutation(async ({ input }) => {
        const user = await this.prisma.usuario.findUnique({
          where: { email: input.email },
        });

        if (!user || !(await bcrypt.compare(input.password, user.password))) {
          throw new Error('Credenciales inválidas');
        }

        // Return token and user info (omitting JWT implementation for brevity)
        return {
          user: {
            id: user.id,
            nombre: user.nombre,
            rol: user.rol,
          },
          token: 'mock-jwt-token',
        };
      }),

    registro: this.trpc.procedure
      .input(z.object({
        nombre: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        rol: z.enum(['ESTUDIANTE', 'ASESOR', 'EMPRESA']),
      }))
      .mutation(async ({ input }) => {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        return this.prisma.usuario.create({
          data: {
            nombre: input.nombre,
            email: input.email,
            password: hashedPassword,
            rol: input.rol as any,
          },
        });
      }),
  });
}
