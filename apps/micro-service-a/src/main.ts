import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroServiceAModule } from './micro-service-a.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroServiceAModule);
  await app.listen(3001);

  const logger = new Logger('MicroServiceA-bootstrap');
  logger.log('MicroServiceA is listening on port 3001');
}
bootstrap();
