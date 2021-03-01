import { IsNumber, IsObject, IsString } from 'class-validator';
import { LocationDto } from './location.dto';

export class RoomDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  size: number;

  @IsObject()
  locationEntity: LocationDto;
}
