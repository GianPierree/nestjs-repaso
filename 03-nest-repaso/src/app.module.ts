import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Products1Module } from './products1/products1.module';
import { Products2Module } from './products2/products2.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [ProductsModule, Products1Module, Products2Module, DealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
