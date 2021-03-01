import {Module} from '@nestjs/common';
import {LocationController} from './location.controller';
import {LocationService} from './location.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocationEntity} from "../entities/location.entity";

@Module({
    controllers: [
        LocationController,
    ],
    providers: [LocationService],
    imports: [TypeOrmModule.forFeature([LocationEntity])]
})
export class LocationModule {
}
