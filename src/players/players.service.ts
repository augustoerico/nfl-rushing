import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Filter } from './entities/filter.entity';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {

  constructor(private readonly repository: PlayersRepository) {}

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll(filter: Filter = undefined) {
    const { repository } = this;
    return repository.fetchMany(filter);
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
