import { Injectable, OnModuleInit } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { readFileSync } from 'fs'
import { Filter } from './entities/filter.entity';
import { sortByYds } from './sorters';

@Injectable()
export class PlayersRepository implements OnModuleInit {
    private items: Player[];

    onModuleInit() {
        this.items = JSON
            .parse(
                readFileSync('rushing.json').toString()
            )
            .map((i: Player)  => ({ ...i, yds: i['Yds'] }));
    }

    fetchMany(filter?: Filter) {
        return filter ?
            this.fetchManyWithFilter(filter) :
            this.fetchManyWithoutFilter();
    }

    fetchManyWithFilter(filter: Filter) {
        const items = Array.from(this.items);
        const { sortBy } = filter;
        if (sortBy === 'yds') {
            return { items: sortByYds(items) };
        } else {
            return this.fetchManyWithoutFilter();
        }
    }

    fetchManyWithoutFilter() {
        return { items: this.items };
    }
}
