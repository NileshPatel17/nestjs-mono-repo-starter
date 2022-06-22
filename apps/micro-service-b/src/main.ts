import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { cyan } from 'colorette';
import { MicroServiceBModule } from './micro-service-b.module';

const PORT = process.env.PORT || 3002;

async function bootstrap() {
  const app = await NestFactory.create(MicroServiceBModule);
  await app.listen(PORT);

  const logger = new Logger('MicroServiceB-bootstrap');
  logger.log(`MicroService-B is listening on port ${cyan(PORT)}`);
}
bootstrap();
