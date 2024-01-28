import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PaymentDTO } from 'dtos/payments/payment.dto';
import { PaymentStatus } from '.prisma/client/payments'
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PaymentsService {
  constructor(
    private prismService: PrismaService,
    @Inject('PAYMENTS_SERVICE')
    private kafkaCLient: ClientKafka,
    ) {}

  all() {
    return this.prismService.payment.findAll();
  }

  async payment(data: PaymentDTO) {
    const payment = await  this.prismService.payment.create({
      data: 
      ...data,
      status: PaymentStatus.APPROVED
    })

    /* TRANSFORMING IN PROMISE */
    await lastValueFrom(this.kafkaCLient.emit('payments', payment))

    return payment
  }

}
