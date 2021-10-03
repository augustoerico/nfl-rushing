import { Filter } from "../entities/filter.entity"
import { PlayerStats } from "../entities/player.entity"

const parse = (result: { items: PlayerStats[], filter?: Filter }) => {
    const { items, filter } = result;
    return {
        items,
        filter,
        links: {
            sortBy: getSortByHrefs(filter)
        }
    }
};

const getSortByHrefs = (
    filter?: Filter
) => {

    const hasPlayer = filter?.player?.length

    let sortBy: { [k: string]: { href: string }};
    switch (filter?.sortBy) {
        case 'yds':
            sortBy = {
                yds: {
                    href: hasPlayer ? `?sortBy=yds-&player=${filter.player}` : '?sortBy=yds-'
                },
                td: {
                    href: hasPlayer ? `?sortBy=td&player=${filter.player}` : '?sortBy=td'
                },
                lng: {
                    href: hasPlayer ? `?sortBy=lng&player=${filter.player}` : '?sortBy=lng'
                }
            }
            break;
        case 'td':
            sortBy = {
                yds: {
                    href: hasPlayer ? `?sortBy=yds&player=${filter.player}` : '?sortBy=yds'
                },
                td: {
                    href: hasPlayer ? `?sortBy=td-&player=${filter.player}` : '?sortBy=td-'
                },
                lng: {
                    href: hasPlayer ? `?sortBy=lng&player=${filter.player}` : '?sortBy=lng'
                }
            }
            break;
        case 'lng':
            sortBy = {
                yds: {
                    href: hasPlayer ? `?sortBy=yds&player=${filter.player}` : '?sortBy=yds'
                },
                td: {
                    href: hasPlayer ? `?sortBy=td&player=${filter.player}` : '?sortBy=td'
                },
                lng: {
                    href: hasPlayer ? `?sortBy=lng-&player=${filter.player}` : '?sortBy=lng-'
                }
            }
            break;
        default:
            sortBy = {
                yds: {
                    href: hasPlayer ? `?sortBy=yds&player=${filter.player}` : '?sortBy=yds'
                },
                td: {
                    href: hasPlayer ? `?sortBy=td&player=${filter.player}` : '?sortBy=td'
                },
                lng: {
                    href: hasPlayer ? `?sortBy=lng&player=${filter.player}` : '?sortBy=lng'
                }
            }
            break;
    }

    return sortBy;
};

export { parse, getSortByHrefs };