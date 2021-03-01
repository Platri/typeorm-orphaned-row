import {IsNumber, IsObject, IsString} from "class-validator";
import {LocationDto} from "./location.dto";

export class LocationRoomDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    size: number;

    @IsObject()
    locationEntity: LocationDto;

}