import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  info(): string {
    return 'Product Info!!!!';
  }
}
