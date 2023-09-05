import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get('/env-test')
  testEnv(): string {
    return `
${this.config.get('HELLO')}
${this.config.get('EXPAND')}
    `;
  }

  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService(): string {
    return `
    ${this.config.get('FILE')}
    ${this.config.get('NEST')}
    ${this.config.get('REACT')}
    ${this.config.get('TYPE')}
    ${this.config.get('HELLO')}
    ${this.config.get('EXPAND')}
    `;
  }
}
