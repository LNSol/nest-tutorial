import { Module } from '@nestjs/common';
import { ProductsModule } from './products.module';
import { PlatformController } from './platform.controller';

@Module({
  imports: [ProductsModule],
  controllers: [PlatformController],
  // providers: [OrdersService, ProductsService],
  exports: [ProductsModule],
})
export class PlatformModule {}
