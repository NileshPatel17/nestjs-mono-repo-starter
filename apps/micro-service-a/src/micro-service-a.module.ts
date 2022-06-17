import { Module } from '@nestjs/common';
import { MicroServiceAController } from './micro-service-a.controller';
import { MicroServiceAService } from './micro-service-a.service';

@Module({
  imports: [],
  controllers: [MicroServiceAController],
  providers: [MicroServiceAService],
})
export class MicroServiceAModule {}
