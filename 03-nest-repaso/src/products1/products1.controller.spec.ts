import { Test, TestingModule } from '@nestjs/testing';
import { Products1Controller } from './products1.controller';

describe('Products1Controller', () => {
  let controller: Products1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Products1Controller],
    }).compile();

    controller = module.get<Products1Controller>(Products1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
