import { Test, TestingModule } from '@nestjs/testing';
import { PlayersRepository } from './players.repository';

describe('PlayersRepository', () => {
  let provider: PlayersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersRepository],
    }).compile();

    provider = module.get<PlayersRepository>(PlayersRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
