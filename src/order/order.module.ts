import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
