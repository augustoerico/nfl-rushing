import { getSortByHrefs } from "./responses";

describe('PlayerStats > Responses', () => {
    describe('SortBy hrefs - no player filter', () => {
        const defaultSortByHrefs = {
            yds: {
                href: '?sortBy=yds'
            },
            td: {
                href: '?sortBy=td'
            },
            lng: {
                href: '?sortBy=lng'
            }
        };

        it('should return the default hrefs for empty and undefined filters', () => {
            // given
            const filters = [{}, undefined];

            // when
            const results = filters.map(getSortByHrefs);

            // then
            expect(results).toEqual([defaultSortByHrefs, defaultSortByHrefs]);
        });

        it('should return the hrefs "flipping" the sortBy on filter', () => {
            // given
            const filters = [
                { sortBy: 'yds' },
                { sortBy: 'yds-' },
                { sortBy: 'td' },
                { sortBy: 'td-' },
                { sortBy: 'lng' },
                { sortBy: 'lng-' }
            ];

            // when
            const results = filters.map(getSortByHrefs);

            // then
            expect(results).toEqual([
                { ...defaultSortByHrefs, yds: { href: '?sortBy=yds-' }},
                { ...defaultSortByHrefs, yds: { href: '?sortBy=yds' }},
                { ...defaultSortByHrefs, td: { href: '?sortBy=td-' }},
                { ...defaultSortByHrefs, td: { href: '?sortBy=td' }},
                { ...defaultSortByHrefs, lng: { href: '?sortBy=lng-' }},
                { ...defaultSortByHrefs, lng: { href: '?sortBy=lng' }},
            ]);
        });
    });

    describe('SortBy hrefs - player filter', () => {
        const defaultSortByHrefs = {
            yds: {
                href: '?sortBy=yds&player=ark'
            },
            td: {
                href: '?sortBy=td&player=ark'
            },
            lng: {
                href: '?sortBy=lng&player=ark'
            }
        };

        it('should return the default hrefs for filter with player only', () => {
            // given
            const filter = { player: 'ark' };

            // when
            const results = getSortByHrefs(filter);

            // then
            expect(results).toEqual(defaultSortByHrefs);
        });

        it('should return the hrefs "flipping" the sortBy on filter', () => {
            // given
            const filters = [
                { sortBy: 'yds', player: 'ark' },
                { sortBy: 'yds-', player: 'ark' },
                { sortBy: 'td', player: 'ark' },
                { sortBy: 'td-', player: 'ark' },
                { sortBy: 'lng', player: 'ark' },
                { sortBy: 'lng-', player: 'ark' }
            ];

            // when
            const results = filters.map(getSortByHrefs);

            // then
            expect(results).toEqual([
                { ...defaultSortByHrefs, yds: { href: '?sortBy=yds-&player=ark' }},
                { ...defaultSortByHrefs, yds: { href: '?sortBy=yds&player=ark' }},
                { ...defaultSortByHrefs, td: { href: '?sortBy=td-&player=ark' }},
                { ...defaultSortByHrefs, td: { href: '?sortBy=td&player=ark' }},
                { ...defaultSortByHrefs, lng: { href: '?sortBy=lng-&player=ark' }},
                { ...defaultSortByHrefs, lng: { href: '?sortBy=lng&player=ark' }},
            ]);
        });
    });
    // describe('Format hrefs', () => {
    // });
})