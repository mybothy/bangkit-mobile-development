import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('personalizations')
export class Personalization {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.personalization)
  user: User;

  @Column({ unique: true })
  userId: number;

  @Column('json')
  preference: object;
}
