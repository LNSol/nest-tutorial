import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/env-test')
  testEnv(): string {
    return `
${this.configService.get('FILE')}
${this.configService.get('EXPAND_FILE')}
${this.configService.get('QQQ')}
${this.configService.get('WWW')}
${this.configService.get('EEE')}
${this.configService.get('NEST')}
${this.configService.get('REACT')}
${this.configService.get('TYPE')}
${this.configService.get('HELLO')}
${this.configService.get('EXPAND')}
    `;
  }

  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService(): string {
    return `
${this.configService.get('DATABASE_HOST')}
${this.configService.get('EMAIL_SERVICE')}
${this.configService.get('EMAIL_AUTH_USER')}
${process.env.DATABASE_HOST}
    `;
  }

  @Get('/all')
  findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: string,
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: string,
  ) {
    return `${typeof offset}/${offset}/${typeof limit}/${limit}`;
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        exceptionFactory: (error) => {
          console.log('error > ', error);
          return {
            statusCode: HttpStatus.NOT_ACCEPTABLE,
            message: 'erorrororor',
          };
        },
      }),
    )
    id: number,
  ) {
    return `${id}`;
  }
}
