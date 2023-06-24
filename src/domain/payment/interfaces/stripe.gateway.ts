import { PaymentGateway } from './payment-gateway.interface';

// stripe.gateway.ts
export class StripeGateway extends PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    // Implement Stripe payment processing logic
    // ...
    return true;
  }
}
