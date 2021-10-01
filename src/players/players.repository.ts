import { Injectable, OnModuleInit } from '@nestjs/common';
import { Player } from './entities/player.entity';
import * as data from '../../rushing.json';

@Injectable()
export class PlayersRepository implements OnModuleInit {
    private items: Player[];

    onModuleInit() {
        this.items = data as any;
    }

    fetchMany() {
        const { items } = this;
        return { items };
    }
}
