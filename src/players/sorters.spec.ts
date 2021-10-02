import exp from "constants";
import { PlayerStats } from "./entities/player.entity";
import { sortByLng } from "./sorters";

describe('players.sorters', () => {
    it('should sort by Lng - no Touchdowns', () => {
        // given
        const items = [
            { lng: '1' },
            { lng: '10' },
            { lng: '-1'}
        ] as PlayerStats[];

        // when
        const itemsSorted = sortByLng(items);

        // then
        expect(itemsSorted).toEqual([
            { lng: '10' },
            { lng: '1' },
            { lng: '-1' }
        ]);
    });

    it('should sort by Lng - Touchdowns', () => {
        // given
        const items = [
            { lng: '5' },
            { lng: '25' },
            { lng: '6T'},
            { lng: '-30' },
            { lng: '-2T' }
        ] as PlayerStats[];

        // when
        const itemsSorted = sortByLng(items);

        // then
        expect(itemsSorted).toEqual([
            { lng: '25' },
            { lng: '6T'},
            { lng: '5' },
            { lng: '-2T' },
            { lng: '-30' }
        ]);
    });
});