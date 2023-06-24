import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ProcessPaymentDto } from './dtos/payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('process')
  async processPayment(@Body() paymentDto: ProcessPaymentDto) {
    const paymentResult = await this.paymentService.processPayment(paymentDto);
    return { success: paymentResult };
  }
}
