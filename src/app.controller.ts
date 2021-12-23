/*
 * @Descripttion: 带有单个路由的基本控制器示例
 * @version: 1.0.0
 * @Author: 王亚军
 * @Date: 2021-07-08 10:48:12
 */
import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller('hello') // 控制器,可选路由路径前缀,方便对一组相关的路由进行分组
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get() // 方法装饰器,可选指指定路径,路由路径由控制器路径前缀+方法装饰器路径组成
	getHello(@Res() response: Response) { // 注入类库特定响应对象,可以使用该对象原生响应处理函数
        response.status(200).send('use exporess send response');
		// return this.appService.getHello();
	}

    @Get('nest')
    getNest(@Req() request: Request): string { // 注入请求对象,默认使用Express.
        return 'learn how to use nest';
    }
}
