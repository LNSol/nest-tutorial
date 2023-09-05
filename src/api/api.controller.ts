import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':version.api.localhost' })
export class ApiController {
  @Get()
  getHello(@HostParam('version') version): string {
    return `Hello, API${version}`;
  }
}
