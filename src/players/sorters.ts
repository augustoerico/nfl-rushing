import { PlayerStats } from "./entities/player.entity";

const sortByYds = (
    items: PlayerStats[],
    desc: boolean = true
) => {
    return desc ? items.sort((a, b) => b.yds - a.yds) : items.sort((a, b) => a.yds - b.yds);
}

const sortByTd = (
    items: PlayerStats[],
    desc: boolean = true
) => {
    return desc ? items.sort((a, b) => b.td - a.td) : items.sort((a, b) => a.td - b.td);
}

const sortByLng = (
    items: PlayerStats[],
    desc: boolean = true
) => {
    return items.sort((a, b) => {
        const aIndexOfT = a.lng.indexOf('T');
        const bIndexOfT = b.lng.indexOf('T');
        const aLng = Number(aIndexOfT > -1 ? a.lng.slice(0, aIndexOfT) : a.lng);
        const bLng = Number(bIndexOfT > -1 ? b.lng.slice(0, bIndexOfT) : b.lng);
        return desc ? bLng - aLng : aLng - bLng;
    });
}

export { sortByYds, sortByTd, sortByLng };