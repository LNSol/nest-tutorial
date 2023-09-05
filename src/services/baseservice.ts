import { Inject } from '@nestjs/common';
import { AService } from 'src/services';

export class BaseServices {
  // @Inject(AService) private readonly serviceA: AService;
  // constructor(readonly serviceA: AService) {}
  @Inject(AService) private readonly serviceA: AService;

  doSomething(): string {
    return this.serviceA.getHello();
  }
}
