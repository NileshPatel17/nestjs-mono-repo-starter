import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroServiceBModule } from './micro-service-b.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroServiceBModule);
  await app.listen(3002);

  const logger = new Logger('MicroServiceB-bootstrap');
  logger.log('MicroService-B is listening on port 3002');
}
bootstrap();
