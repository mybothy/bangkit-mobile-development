import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { FoodScan } from './food-scan.entity';
import { FoodHistory } from './food-history.entity';
import { Point } from './point.entity';
import { UserReward } from './user-reward.entity';
import { UserWorkout } from './user-workout.entity';
import { Personalization } from './personalization.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  goal: string;

  @OneToMany(() => FoodScan, (foodScan) => foodScan.user)
  foodScans: FoodScan[];

  @OneToMany(() => FoodHistory, (foodHistory) => foodHistory.user)
  foodHistory: FoodHistory[];

  @OneToMany(() => Point, (point) => point.user)
  points: Point[];

  @OneToMany(() => UserReward, (userReward) => userReward.user)
  userRewards: UserReward[];

  @OneToMany(() => UserWorkout, (userWorkout) => userWorkout.user)
  workouts: UserWorkout[];

  @OneToOne(() => Personalization, (personalization) => personalization.user)
  @JoinColumn()
  personalization: Personalization;
}
