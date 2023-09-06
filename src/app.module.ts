import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.A.env', '.B.env', '.C.env'],
      // expandVariables: true,
      expandVariables: {
        parsed: {
          QQQ: 'qqq',
          WWW: '${QQQ}ttt',
        },
      },
    }),
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
