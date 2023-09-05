import { Injectable } from '@nestjs/common';
import { BaseServices } from 'src/services/baseservice';
// import { AService } from './a.service';

@Injectable()
export class BService extends BaseServices {
  // constructor(readonly serviceA: AService) {
  //   super(serviceA);
  // }
  getHello(): string {
    return this.doSomething();
  }
}
