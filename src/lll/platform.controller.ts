import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ProductsService } from './products.service';

@Controller('platform')
export class PlatformController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly productsService: ProductsService,
  ) {}

  @Get('/buy')
  buy(): string {
    return `
    Buy!!!
    ${this.productsService.info()}
    ${this.ordersService.order()}
    `;
  }
}
