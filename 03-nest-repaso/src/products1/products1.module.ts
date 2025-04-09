import { Module } from '@nestjs/common';
import { Products1Controller } from './products1.controller';
import { Products1Service } from './products1.service';

@Module({
  controllers: [Products1Controller],
  providers: [Products1Service]
})
export class Products1Module {}
