import { parse, validateSortBy } from "./filters";

describe('PlayerStats > Filter', () => {
    
    describe('Query validator', () => {
        it('should return undefined for invalid sortBy value: "tallest"', () => {
            // given
            const queryStrValue = 'tallest';

            // when
            const result = validateSortBy(queryStrValue);

            // then
            expect(result).toBeUndefined();
        });

        it('should return lowercase sortBy for all valid value', () => {
            // given
            const queryStrValues = [
                'yds',
                'YDS-',
                'tD',
                'Td-',
                'Lng',
                'lNG-'
            ];

            // when
            const result = queryStrValues.map(validateSortBy);

            // then
            expect(result).toEqual([
                'yds', 'yds-', 'td', 'td-', 'lng', 'lng-'
            ]);
        });
    });

    describe('Query parser', () => {
        it('should return an empty filter for unexpected query string params', () => {
            // given
            const query = {
                someQueryStrParam: '123',
                '1': '23',
                'undefined': undefined
            };

            // when
            const result = parse(query);

            // then
            expect(result).toEqual({});
        });

        it('should return an empty filter for undefined query string params',  () => {
            // given
            const query = undefined;

            // when
            const result = parse(query);

            // then
            expect(result).toEqual({});
        });

        it('should ignore "filter by player" with less than 2 letters', () => {
            // given
            const query = {
                player: 'a',
                sortBy: 'Yds'
            };

            // when
            const result = parse(query);

            // then
            expect(result).toEqual({ sortBy: 'yds' });
        });

        it('should return a valid filter', () => {
            // given
            const query = {
                player: 'ark',
                sortBy: 'lNg-'
            };

            // when
            const result = parse(query);

            // then
            expect(result).toEqual({ player: 'ark', sortBy: 'lng-' });
        });
    });
});