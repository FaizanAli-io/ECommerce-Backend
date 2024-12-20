import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order based on a user cart' })
  @ApiResponse({ status: 201, description: 'Order created successfully.' })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all orders' })
  @ApiResponse({ status: 200, description: 'List of orders.' })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an order by ID' })
  @ApiResponse({ status: 200, description: 'Order found.' })
  findOne(@Param('id') id: number) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the status of an order by ID' })
  @ApiResponse({ status: 200, description: 'Order updated successfully.' })
  update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order by ID' })
  @ApiResponse({ status: 200, description: 'Order deleted successfully.' })
  remove(@Param('id') id: number) {
    return this.orderService.remove(id);
  }

  @Get(':id/payOrder')
  @ApiOperation({ summary: 'Pay an order by ID' })
  @ApiResponse({ status: 200, description: 'Order payment successful.' })
  payOrder(@Param('id') id: number) {
    return this.orderService.payOrder(id);
  }

  @Get(':id/cancelOrder')
  @ApiOperation({ summary: 'Cancel an order by ID' })
  @ApiResponse({ status: 200, description: 'Order cancellation successful.' })
  cancelOrder(@Param('id') id: number) {
    return this.orderService.cancelOrder(id);
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Retrieve the orders associated with a user' })
  @ApiResponse({
    status: 200,
    description: 'The orders associated with the user.',
  })
  findOrdersByUserId(@Param('id') id: number): Promise<any> {
    return this.orderService.findOrdersByUserId(id);
  }
}
