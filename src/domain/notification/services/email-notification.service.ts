import { Injectable } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Injectable()
export class EmailNotificationService extends NotificationService {
  async sendNotification(message: string): Promise<string> {
    return `send email: ${message}`;
  }
}
