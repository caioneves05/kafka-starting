import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { OrdersDTO } from './order.dto';
import { OrderStatus } from '.prisma/client/orders';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    private prismaService: PrismaService,
    @Inject('ODERS_SERVICE')
    private kafkaCLient: ClientKafka,
  ) {}

  all() {
    return this.prismaService.order.findmany();
  }

  async create(data: OrdersDTO) {
    const order = await this.prismaService.order.create({
      data: {
        ...data,
        status: OrderStatus.PENDING,
      },
    });

    /* TRANSFORMING IN PROMISE */
    await lastValueFrom(this.kafkaCLient.emit('orders', order));

    return order;
  }
}
