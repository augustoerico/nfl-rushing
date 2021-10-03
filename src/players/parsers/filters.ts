import { Filter } from "../entities/filter.entity";

const validateSortBy = (
    sortByRaw: string
): string | undefined => {
    const validValues = [
        'yds', 'yds-', 'td', 'td-', 'lng', 'lng-'
    ];
    const sortBy = sortByRaw.toLowerCase();
    return validValues.includes(sortBy) ?
        sortBy : undefined;
}

const parse = (
    query: { [k: string]: string }
): Filter => {
    const filter: Filter = {};
    
    if (query.sortBy) {
        filter.sortBy = validateSortBy(query.sortBy);
    }

    if (query.player?.length > 1) {
        filter.player = query.player.toLowerCase();
    }

    return filter;
}

export { parse };