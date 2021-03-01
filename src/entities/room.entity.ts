import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocationEntity } from './location.entity';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  size: number;

  @ManyToOne(
    () => LocationEntity,
    (locationEntity) => locationEntity.locationRoomEntity,
    { orphanedRowAction: 'delete' },
  )
  locationEntity: LocationEntity;
}
