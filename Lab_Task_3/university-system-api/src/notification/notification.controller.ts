import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service.js';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Post('send')
  sendNotification(@Body() body: any) {
    return this.notificationService.sendNotification(body.userId, body.message);
  }
}