/*
 * @Descripttion: 带有单个路由的基本控制器示例
 * @version: 1.0.0
 * @Author: 王亚军
 * @Date: 2021-07-08 10:48:12
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * @description: 
 * @param {*}
 * @return {*}
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
