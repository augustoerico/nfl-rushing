import { Injectable, OnModuleInit } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { readFileSync } from 'fs'
import { Filter } from './entities/filter.entity';

@Injectable()
export class PlayersRepository implements OnModuleInit {
    private items: Player[];

    onModuleInit() {
        this.items = JSON.parse(readFileSync('rushing.json').toString());
    }

    fetchMany(filter?: Filter) {
        const { items } = this;
        return { items };
    }
}
