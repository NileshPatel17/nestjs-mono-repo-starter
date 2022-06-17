import { Module } from '@nestjs/common';
import { MicroServiceBController } from './micro-service-b.controller';
import { MicroServiceBService } from './micro-service-b.service';

@Module({
  imports: [],
  controllers: [MicroServiceBController],
  providers: [MicroServiceBService],
})
export class MicroServiceBModule {}
