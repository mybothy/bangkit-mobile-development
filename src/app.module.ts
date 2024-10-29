import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FoodScan } from './entities/food-scan.entity';
import { FoodHistory } from './entities/food-history.entity';
import { UserWorkout } from './entities/user-workout.entity';
import { UserReward } from './entities/user-reward.entity';
import { Newsletter } from './entities/newsletter.entity';
import { Personalization } from './entities/personalization.entity';
import { Point } from './entities/point.entity';
import { Reward } from './entities/reward.entity';

@Module({
  imports: [
    AuthModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'hyfit',
      entities: [
        User,
        FoodScan,
        FoodHistory,
        UserWorkout,
        UserReward,
        Newsletter,
        Personalization,
        Point,
        Reward,
      ],
    }),
  ],
})
export class AppModule {}
