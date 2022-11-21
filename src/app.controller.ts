import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('dt_created')
  handleDtcreated(data: CreateUserEvent) {
    this.appService.handleDtCreated(data);
  }

  @MessagePattern({ cmd: 'get_dts' })
  getDts() {
    return this.appService.getDts();
  }
}
