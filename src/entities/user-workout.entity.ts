import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_workouts')
export class UserWorkout {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.workouts)
  user: User;

  @Column()
  userId: number;

  @Column()
  exerciseType: string;

  @Column()
  reps: number;

  @CreateDateColumn()
  sessionDate: Date;
}
