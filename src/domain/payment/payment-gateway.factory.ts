import { Injectable } from '@nestjs/common';
import { PaymentGateway } from './interfaces/payment-gateway.interface';
import { StripeGateway } from './interfaces/stripe.gateway';
import { PayPalGateway } from './interfaces/paypal.gateway';

@Injectable()
export class PaymentGatewayFactory {
  createPaymentGateway(gateway: string): PaymentGateway {
    switch (gateway.toLocaleLowerCase()) {
      case 'stripe':
        return new StripeGateway();
      case 'paypal':
        return new PayPalGateway();
      default:
        throw new Error('Invalid payment gateway');
    }
  }
}
