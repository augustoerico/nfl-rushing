import { Filter } from "../entities/filter.entity";

const validateSortBy = (
    sortByRaw: string
): string | undefined => {
    const validValues = [
        'yds', 'lng',  'td'
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
        filter.sortBy = validateSortBy(query.sortBy)
    }

    return filter;
}

export { parse };