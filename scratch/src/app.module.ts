import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

//nest will create instances of the controllers and inject them into the module
@Module({
    controllers: [AppController]
})
export class AppModule {}