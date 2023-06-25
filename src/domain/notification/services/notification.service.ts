import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class NotificationService {
  abstract sendNotification(message: string): Promise<string>;
}
