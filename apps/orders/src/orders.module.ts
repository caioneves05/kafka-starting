import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        /* PUBLISHER */
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'orders',
            brokers: ['kafka:29092'],
          },
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
