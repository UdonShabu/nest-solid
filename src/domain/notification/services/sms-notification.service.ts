import { Injectable } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Injectable()
export class SMSNotificationService extends NotificationService {
  async sendNotification(message: string): Promise<string> {
    return `send SMS: ${message}`;
  }
}
