import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import * as data from '../../rushing.json';

@Injectable()
export class PlayersService implements OnModuleInit {

  private deps: any;

  onModuleInit() {
    this.deps = {
      repository: {
        fetchMany: () => {
          return {
            items: data as any
          }
        }
      }
    }
  }

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    const { repository } = this.deps;
    return repository.fetchMany();
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
