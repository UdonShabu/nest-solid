import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationServiceFactory } from './factories/notification.service.factory';

@Module({
  controllers: [NotificationController],
  providers: [NotificationServiceFactory],
})
export class NotificationModule {}
