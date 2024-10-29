import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ActivityType } from './enum';

@Entity('points')
export class Point {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.points)
  user: User;

  @Column()
  userId: number;

  @Column({ type: 'enum', enum: ActivityType })
  activityType: ActivityType;

  @Column()
  points: number;

  @CreateDateColumn()
  activityDate: Date;
}
