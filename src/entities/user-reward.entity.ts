import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Reward } from './reward.entity';

@Entity('user_rewards')
export class UserReward {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userRewards)
  user: User;

  @Column()
  userId: number;

  @ManyToOne(() => Reward, (reward) => reward.userRewards)
  reward: Reward;

  @Column()
  rewardId: number;

  @CreateDateColumn()
  redeemedAt: Date;
}
