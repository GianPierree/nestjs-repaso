import { Module } from '@nestjs/common';
import { Products2Controller } from './products2.controller';
import { Products2Service } from './products2.service';

@Module({
  controllers: [Products2Controller],
  providers: [Products2Service]
})
export class Products2Module {}
