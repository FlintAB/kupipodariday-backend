import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { nestCsrf } from 'ncsrf';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.use(helmet());
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(cookieParser());
  app.use(nestCsrf());
  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap();
