<<<<<<< HEAD
import { NestFactory } from "@nestjs/core"
import { OrdersModule } from './orders.module'

async function bootstrap() {
    const app = await NestFactory.create(OrdersModule)
    await app.listen(3000)
}

bootstrap()
=======
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:29092'],
      },
      consumer: {
        groupId: 'orders-consumer',
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
>>>>>>> 0dc265b8db32194b3a5165977fe48f6d3d426b15
