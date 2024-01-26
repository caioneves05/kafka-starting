import { NestFactory } from "@nestjs/core"
import { Payments } from './payments.module'

async function bootstrap() {
    const app = await NestFactory.create(PaymentsModule)
    await app.listen(3000)
}

bootstrap()