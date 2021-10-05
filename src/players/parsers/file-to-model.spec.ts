import exp from "constants";
import { parse } from "./file-to-model";

describe('PlayerStats > Parsers', () => {
    it('should parse player stats from file to business model - base case', () => {
        // given
        const playerStatsRaw = {
            "Player": "Khiry Robinson",
            "Team": "NYJ",
            "Pos": "RB",
            "Att": 8,
            "Att/G": 8,
            "Yds": 22,
            "Avg": 2.8,
            "Yds/G": 22,
            "TD": 0,
            "Lng": "10",
            "1st": 1,
            "1st%": 12.5,
            "20+": 0,
            "40+": 0,
            "FUM": 1
        };

        // when
        const result = parse(playerStatsRaw);

        // then
        expect(result).toEqual({
            player: "Khiry Robinson",
            team: "NYJ",
            pos: "RB",
            att: 8,
            attPerG: 8,
            yds: 22,
            avg: 2.8,
            ydsPerG: 22,
            td: 0,
            lng: "10",
            r1st: 1,
            r1stPercent: 12.5,
            r20Plus: 0,
            r40Plus: 0,
            fum: 1
        });
    });

    it('should parse player stats from file to business model - alternative types', () => {
        // given
        const playerStatsRaw = {
            "Player": "Jay Ajayi",
            "Team": "MIA",
            "Pos": "RB",
            "Att": 260,
            "Att/G": 17.3,
            "Yds": "1,272",
            "Avg": 4.9,
            "Yds/G": 84.8,
            "TD": 8,
            "Lng": 62, // "Lng":"62T",
            "1st": 60,
            "1st%": 23.1,
            "20+": 10,
            "40+": 4,
            "FUM": 4
        };

        // when
        const result = parse(playerStatsRaw);

        // then
        expect(result).toEqual({
            player: "Jay Ajayi",
            team: "MIA",
            pos: "RB",
            att: 260,
            attPerG: 17.3,
            yds: 1_272, // * number
            avg: 4.9,
            ydsPerG: 84.8,
            td: 8,
            lng: "62", // * string
            r1st: 60,
            r1stPercent: 23.1,
            r20Plus: 10,
            r40Plus: 4,
            fum: 4
        });
    });
});