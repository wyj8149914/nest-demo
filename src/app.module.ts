/*
 * @Descripttion: 应用程序根模块
 * @version: 1.0.0
 * @Author: 王亚军
 * @Date: 2021-07-08 10:48:12
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
