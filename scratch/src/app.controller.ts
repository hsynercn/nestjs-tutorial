import { Controller, Get } from '@nestjs/common';

//module wraps a controller

@Controller('/app') // decorator, this will be a controller
export class AppController {
    @Get()
    getRootRoute() {
        return 'Hello World!';
    }
    @Get('/asdf')
    getAnotherRoute() {
        return 'Hello ASDF!';
    }
    @Get('/bye')
    getByeThere() {
        return 'Bye there!';
    }
}