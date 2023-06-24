export abstract class PaymentGateway {
  abstract processPayment(amount: number): Promise<boolean>;
}
