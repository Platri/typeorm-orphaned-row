import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {LocationEntity} from "../entities/location.entity";
import {Repository} from "typeorm";
import {LocationDto} from "../entities/location.dto";

@Injectable()
export class LocationService {

    constructor(@InjectRepository(LocationEntity) private repository: Repository<LocationEntity>) {
    }

    async createLocation(locationDto: LocationDto): Promise<any> {
        const locationEntity: LocationEntity = this.repository.create(locationDto);
        locationEntity.locationRoomEntity = locationDto.locationRoomEntity;
        return await this.repository.save(locationEntity);
    }

    async updateLocation(locationDto: LocationEntity): Promise<any> {
        const locationEntity = await this.repository.preload(locationDto);
        locationEntity.locationRoomEntity = locationDto.locationRoomEntity;
        return await this.repository.save(locationEntity);
    }


}
