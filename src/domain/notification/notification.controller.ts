import { Body, Controller, Post } from '@nestjs/common';
import { NotificationServiceFactory } from './factories/notification.service.factory';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notiServiceFactory: NotificationServiceFactory,
  ) {}

  @Post()
  async sendNotification(@Body() dto): Promise<string> {
    const notiService = await this.notiServiceFactory.createNotificationService(
      dto.type,
    );
    const sendResult = await notiService.sendNotification(dto.message);
    return sendResult;
  }
}
