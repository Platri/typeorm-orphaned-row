import { Test, TestingModule } from '@nestjs/testing';
import { LocationRoomController } from './location-room.controller';

describe('LocationRoomController', () => {
  let controller: LocationRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationRoomController],
    }).compile();

    controller = module.get<LocationRoomController>(LocationRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
