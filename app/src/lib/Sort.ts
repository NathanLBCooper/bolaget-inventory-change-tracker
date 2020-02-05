export function sort<T>(entities: T[], predicate: ((t: T) => {})): T[] {
    return entities.sort((left, right) => {
        const leftStr: {} = predicate(left);
        const rightStr: {} = predicate(right);

        return leftStr < rightStr ? -1 : leftStr > rightStr ? 1 : 0;
    });
}
