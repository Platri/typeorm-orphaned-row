import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LocationEntity} from "./location.entity";


@Entity('location-room')
export class LocationRoomEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "int"})
    size: number;

    @ManyToOne(
        () => LocationEntity,
        locationEntity => locationEntity.locationRoomEntity,
        {orphanedRowAction: "delete"})
    locationEntity: LocationEntity

}