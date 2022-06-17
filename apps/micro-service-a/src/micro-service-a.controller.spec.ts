import { Test, TestingModule } from '@nestjs/testing';
import { MicroServiceAController } from './micro-service-a.controller';
import { MicroServiceAService } from './micro-service-a.service';

describe('MicroServiceAController', () => {
  let microServiceAController: MicroServiceAController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroServiceAController],
      providers: [MicroServiceAService],
    }).compile();

    microServiceAController = app.get<MicroServiceAController>(MicroServiceAController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microServiceAController.getHello()).toBe('Hello World!');
    });
  });
});
