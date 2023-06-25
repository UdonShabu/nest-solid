import { Injectable } from '@nestjs/common';
import { PaymentGateway } from './interfaces/payment-gateway.interface';
import { ProcessPaymentDto } from './dtos/payment.dto';
import { PaymentGatewayFactory } from './payment-gateway.factory';

@Injectable()
export class PaymentService {
  constructor(private readonly gatewayFactory: PaymentGatewayFactory) {}

  async processPayment({
    method,
    amount,
  }: ProcessPaymentDto): Promise<boolean> {
    const selectedGateway: PaymentGateway =
      this.gatewayFactory.createPaymentGateway(method);

    const paymentResult = await selectedGateway.processPayment(amount);
    return paymentResult;
  }
}
