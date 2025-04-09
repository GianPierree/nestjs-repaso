import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';
import { Deal } from './entities/deal.entity';

@Injectable()
export class DealsService {
  private deals: Deal[] = [];

  create(deal: CreateDealDto) {
    this.deals.push({
      id: uuidv4(),
      title: deal.title,
      description: deal.description,
      price: deal.price
    });

    return deal;
  }

  findAll() {
    return this.deals;
  }

  findOne(id: number) {
    return `This action returns a #${id} deal`;
  }

  update(id: number, updateDealDto: UpdateDealDto) {
    return `This action updates a #${id} deal`;
  }

  remove(id: number) {
    return `This action removes a #${id} deal`;
  }
}
