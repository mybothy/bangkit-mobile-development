import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('food_history')
export class FoodHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.foodHistory)
  user: User;

  @Column()
  userId: number;

  @Column()
  foodName: string;

  @Column()
  quantity: number;

  @Column('decimal')
  calories: number;

  @Column('decimal')
  protein: number;

  @CreateDateColumn()
  entryDate: Date;
}
