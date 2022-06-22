import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {cyan } from 'colorette'
import { MicroServiceAModule } from './micro-service-a.module';

const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(MicroServiceAModule);
  await app.listen(PORT);

  const logger = new Logger('MicroServiceA-bootstrap');
  logger.log(`MicroService-A is listening on port ${cyan(PORT)}`);
}
bootstrap();
