import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() deal: CreateDealDto) {
    return this.dealsService.create(deal);
  }

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealDto: UpdateDealDto) {
    return this.dealsService.update(+id, updateDealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(+id);
  }
}
