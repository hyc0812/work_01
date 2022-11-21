import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  private readonly dt: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleDtCreated(data: CreateUserEvent) {
    console.log('handleDtCreated -> worker_01', data);
    this.dt.push({
      name: data.name,
      timestamp: new Date(),
    });
  }

  getDts() {
    return this.dt;
  }
}
