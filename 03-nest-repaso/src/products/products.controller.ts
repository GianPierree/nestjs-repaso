import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findProducts() {
    return this.productsService.findProducts();
  }

  @Post()
  createProducts(@Body() data) {
    return this.productsService.createProducts(data);
  }
}