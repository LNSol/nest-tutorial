import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.A.env', '.B.env', '.C.env'],
      expandVariables: {
        parsed: {
          HELLO: 'WORLD',
          EXPAND: 'TRUE',
        },
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
