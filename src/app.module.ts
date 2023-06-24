import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShippingModule } from './domain/shipping/shipping.module';
import { PaymentModule } from './domain/payment/payment.module';

@Module({
  imports: [ShippingModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
