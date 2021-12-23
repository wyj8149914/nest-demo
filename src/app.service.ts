/*
 * @Descripttion: 带有单个方法的基本服务
 * @version: 1.0.0
 * @Author: 王亚军
 * @Date: 2021-07-08 10:48:12
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}
}
