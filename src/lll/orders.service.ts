import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  order(): string {
    return 'Order!!!!';
  }
}
