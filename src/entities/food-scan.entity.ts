import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('food_scans')
export class FoodScan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.foodScans)
  user: User;

  @Column()
  userId: number;

  @Column()
  foodName: string;

  @Column('decimal')
  calories: number;

  @Column('decimal')
  protein: number;

  @Column('json', { nullable: true })
  otherNutrients: object;

  @CreateDateColumn()
  scanDate: Date;
}
