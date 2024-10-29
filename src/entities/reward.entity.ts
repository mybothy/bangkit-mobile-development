import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserReward } from './user-reward.entity';

@Entity('rewards')
export class Reward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pointsRequired: number;

  @Column({ nullable: true })
  description: string;

  @Column({ default: true })
  availability: boolean;

  @OneToMany(() => UserReward, (userReward) => userReward.reward)
  userRewards: UserReward[];
}
