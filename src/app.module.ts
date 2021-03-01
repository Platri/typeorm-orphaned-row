import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { LocationRoomModule } from './location-room/location-room.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocationEntity} from "./entities/location.entity";
import {LocationRoomEntity} from "./entities/location-room.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'orphaned',
      entities: [LocationEntity, LocationRoomEntity],
      synchronize: true,
    }),
    LocationModule,
    LocationRoomModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
