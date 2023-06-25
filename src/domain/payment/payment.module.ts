import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentGatewayFactory } from './payment-gateway.factory';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PaymentGatewayFactory],
})
export class PaymentModule {}
