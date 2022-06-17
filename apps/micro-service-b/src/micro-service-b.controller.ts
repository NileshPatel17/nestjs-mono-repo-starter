import { Controller, Get } from '@nestjs/common';
import { MicroServiceBService } from './micro-service-b.service';

@Controller()
export class MicroServiceBController {
  constructor(private readonly microServiceBService: MicroServiceBService) {}

  @Get()
  getHello(): string {
    return this.microServiceBService.getHello();
  }
}
