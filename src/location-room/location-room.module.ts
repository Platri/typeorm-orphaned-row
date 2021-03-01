import { Module } from '@nestjs/common';
import { LocationRoomController } from './location-room.controller';
import { LocationRoomService } from './location-room.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocationRoomEntity} from "../entities/location-room.entity";

@Module({
  controllers: [LocationRoomController],
  providers: [LocationRoomService],
  imports: [TypeOrmModule.forFeature([LocationRoomEntity])]
})
export class LocationRoomModule {}
