import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroServiceBService {
  getHello(): string {
    return 'Hello World! - MicroService-B';
  }
}
