import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShippingModule } from './domain/shipping/shipping.module';

@Module({
  imports: [ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
