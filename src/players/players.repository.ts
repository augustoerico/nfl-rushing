import { Injectable, OnModuleInit } from '@nestjs/common';
import { PlayerStats } from './entities/player.entity';
import { readFileSync } from 'fs'
import { Filter } from './entities/filter.entity';
import { sortByLng, sortByTd, sortByYds } from './sorters';
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
        let itemsSorted: PlayerStats[];
        switch (sortBy) {
            case 'yds':
                itemsSorted = sortByYds(items);
                break;
            case 'yds-':
                itemsSorted = sortByYds(items, false);
                break;
            case 'td':
                itemsSorted = sortByTd(items);
                break;
            case 'td-':
                itemsSorted = sortByTd(items, false);
                break;
            case 'lng':
                itemsSorted = sortByLng(items);
                break;
            case 'lng-':
                itemsSorted = sortByLng(items, false);
                break;
            default:
                itemsSorted = items;
                break;
        }
        return { items: itemsSorted };
    }

    fetchManyWithoutFilter() {
        return { items: this.items };
    }
}
