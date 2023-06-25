import { BadRequestException, Injectable } from '@nestjs/common';
import { NotificationService } from '../services/notification.service';
import { EmailNotificationService } from '../services/email-notification.service';
import { SMSNotificationService } from '../services/sms-notification.service';

@Injectable()
export class NotificationServiceFactory {
  async createNotificationService(type: string): Promise<NotificationService> {
    switch (type.toLocaleLowerCase()) {
      case 'email':
        return new EmailNotificationService();
      case 'sms':
        return new SMSNotificationService();
      default:
        throw new BadRequestException('Invalid notification type');
    }
  }
}
