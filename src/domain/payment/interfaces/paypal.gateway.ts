import { PaymentGateway } from './payment-gateway.interface';

// paypal.gateway.ts
export class PayPalGateway extends PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    // Implement PayPal payment processing logic
    // ...
    return true;
  }
}
