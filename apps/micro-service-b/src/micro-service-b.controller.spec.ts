import { Test, TestingModule } from '@nestjs/testing';
import { MicroServiceBController } from './micro-service-b.controller';
import { MicroServiceBService } from './micro-service-b.service';

describe('MicroServiceBController', () => {
  let microServiceBController: MicroServiceBController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroServiceBController],
      providers: [MicroServiceBService],
    }).compile();

    microServiceBController = app.get<MicroServiceBController>(MicroServiceBController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microServiceBController.getHello()).toBe('Hello World!');
    });
  });
});
