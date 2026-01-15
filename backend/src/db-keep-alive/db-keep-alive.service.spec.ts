import { Test, TestingModule } from '@nestjs/testing';
import { DbKeepAliveService } from '../db-keep-alive.service';

describe('DbKeepAliveService', () => {
  let service: DbKeepAliveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbKeepAliveService],
    }).compile();

    service = module.get<DbKeepAliveService>(DbKeepAliveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
