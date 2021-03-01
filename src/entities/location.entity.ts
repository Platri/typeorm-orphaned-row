import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {LocationRoomEntity} from "./location-room.entity";


@Entity()
export class LocationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    street: string;

    @Column({type: "int"})
    streetNumber: number;

    @OneToMany(
        () => LocationRoomEntity,
        locationRoomEntity => locationRoomEntity.locationEntity,
        {cascade: true})
    locationRoomEntity: LocationRoomEntity[]
}