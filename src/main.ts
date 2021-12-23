/*
 * @Descripttion: 应用程序主入口
 * @version: 1.0.0
 * @Author: 王亚军
 * @Date: 2021-07-08 10:48:12
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
