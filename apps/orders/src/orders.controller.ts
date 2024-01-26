<<<<<<< HEAD
import { Controller, Get } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller()
=======
import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderStatus } from '.prisma/client/orders';

@Controller('orders')
>>>>>>> 0dc265b8db32194b3a5165977fe48f6d3d426b15
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
<<<<<<< HEAD
  getHello(): string {
    return this.ordersService.getHello()
  }
}
=======
  all() {
    return this.ordersService.all();
  }

  @Post()
  create(@Body() data: OrderDto) {
    return this.ordersService.create(data);
  }

  @MessagePattern('payments')
  async complete(@Payload() message) {
    console.log(message);
    await this.ordersService.complete(
      message.order_id,
      message.status === 'APPROVED' ? OrderStatus.PAYED : OrderStatus.CANCELLED,
    );
  }
}
>>>>>>> 0dc265b8db32194b3a5165977fe48f6d3d426b15
