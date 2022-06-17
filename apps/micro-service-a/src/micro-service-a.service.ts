import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroServiceAService {
  getHello(): string {
    return 'Hello World! - MicroService-A';
  }
}
