import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentGateway } from './interfaces/payment-gateway.interface';
import { StripeGateway } from './interfaces/stripe.gateway';
import { PayPalGateway } from './interfaces/paypal.gateway';
import { ProcessPaymentDto } from './dtos/payment.dto';

@Injectable()
export class PaymentService {
  constructor() {}

  async processPayment(paymentData: ProcessPaymentDto): Promise<boolean> {
    let selectedGateway: PaymentGateway;

    switch (paymentData.method) {
      case 'stripe':
        selectedGateway = new StripeGateway();
        break;
      case 'paypal':
        selectedGateway = new PayPalGateway();
        break;
      default:
        throw new NotFoundException('Invalid payment gateway');
    }

    const paymentResult = await selectedGateway.processPayment(
      paymentData.amount,
    );
    return paymentResult;
  }
}
