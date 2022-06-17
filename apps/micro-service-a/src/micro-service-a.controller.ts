import { Controller, Get } from '@nestjs/common';
import { MicroServiceAService } from './micro-service-a.service';

@Controller()
export class MicroServiceAController {
  constructor(private readonly microServiceAService: MicroServiceAService) {}

  @Get()
  getHello(): string {
    return this.microServiceAService.getHello();
  }
}
