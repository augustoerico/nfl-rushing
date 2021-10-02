import { Injectable, OnModuleInit } from '@nestjs/common';
import { PlayerStats } from './entities/player.entity';
import { readFileSync } from 'fs'
import { Filter } from './entities/filter.entity';
import { sortByYds } from './sorters';
import { parse } from './parsers/file-to-model';

@Injectable()
export class PlayersRepository implements OnModuleInit {
    private items: PlayerStats[];

    onModuleInit() {
        this.items = JSON
            .parse(
                readFileSync('rushing.json').toString()
            )
            .map(parse);
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
