import { PlayerStats } from "../entities/player.entity"

const parse = (
    player: { [k: string]: string | number }
) => {
    const yds = typeof player['Yds'] === 'number' ?
        player['Yds'] : Number(player['Yds'].replace(',', ''));

    const lng = typeof player['Lng'] === 'number' ?
        `${player['Lng']}` : player['Lng'];

    return {
        player: player['Player'],
        team: player['Team'],
        pos: player['Pos'],
        att: player['Att'],
        attPerG: player['Att/G'],
        yds,
        avg: player['Avg'],
        ydsPerG: player['Yds/G'],
        td: player['TD'],
        lng,
        r1st: player['1st'],
        r1stPercent: player['1st%'],
        r20Plus: player['20+'],
        r40Plus: player['40+'],
        fum: player['FUM']
    } as PlayerStats;
}

export { parse };