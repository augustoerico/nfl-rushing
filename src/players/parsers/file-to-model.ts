import { PlayerStats } from "../entities/player.entity"

const parse = (
    player: { [k: string]: string | number }
) => {
    const yds = typeof player['Yds'] === 'number' ?
        player['Yds'] : Number(player['Yds'].replace(',', ''));

    return {
        player: player['Player'],
        team: player['Team'],
        pos: player['Pos'],
        att: player['Att'],
        attPerG: player['Att/G'],
        yds,
        avg: player['Avg'],
        ydsPerG: player['ydsPerG'],
        td: player['TD'],
        lng: player['Lng'],
        r1st: player['1st'],
        r1stPercent: player['1st%'],
        r20Plus: player['20+'],
        r40Plus: player['40+'],
        fum: player['FUM']
    } as PlayerStats;
}

export { parse };