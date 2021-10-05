import { Injectable } from '@nestjs/common';
import { Filter } from './entities/filter.entity';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {

  constructor(private readonly repository: PlayersRepository) {}

  findAll(filter: Filter = undefined) {
    const { repository } = this;
    return repository.fetchMany(filter);
  }
}
