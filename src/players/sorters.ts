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

export { sortByYds, sortByTd };