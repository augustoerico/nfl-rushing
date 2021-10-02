import { Injectable, OnModuleInit } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { readFileSync } from 'fs'

@Injectable()
export class PlayersRepository implements OnModuleInit {
    private items: Player[];

    onModuleInit() {
        this.items = JSON.parse(readFileSync('rushing.json').toString());
    }

    fetchMany() {
        const { items } = this;
        return { items };
    }
}
