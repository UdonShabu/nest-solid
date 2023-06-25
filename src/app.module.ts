import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShippingModule } from './domain/shipping/shipping.module';
import { PaymentModule } from './domain/payment/payment.module';
import { UserModule } from './domain/user/user.module';
import { NotificationModule } from './domain/notification/notification.module';

@Module({
  imports: [ShippingModule, PaymentModule, UserModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
