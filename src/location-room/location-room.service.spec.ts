import { Test, TestingModule } from '@nestjs/testing';
import { LocationRoomService } from './location-room.service';

describe('LocationRoomService', () => {
  let service: LocationRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationRoomService],
    }).compile();

    service = module.get<LocationRoomService>(LocationRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
