import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  dotenv.config({ path: join(__dirname, '..', '.env') });
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Adjust for production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
  console.log(`Backend running on: ${await app.getUrl()}`);
}
bootstrap();
