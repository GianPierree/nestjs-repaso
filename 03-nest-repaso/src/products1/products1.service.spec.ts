import { Test, TestingModule } from '@nestjs/testing';
import { Products1Service } from './products1.service';

describe('Products1Service', () => {
  let service: Products1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Products1Service],
    }).compile();

    service = module.get<Products1Service>(Products1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
