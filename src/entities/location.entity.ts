import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from './room.entity';

@Entity()
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  street: string;

  @Column({ type: 'int' })
  streetNumber: number;

  @OneToMany(
    () => RoomEntity,
    (locationRoomEntity) => locationRoomEntity.locationEntity,
    { cascade: true },
  )
  locationRoomEntity: RoomEntity[];
}
