/**
 * Возвращаю индекс элемента в массиве
 * @param list
 * @param item
 */
export const getIndexElementProduct = <T extends { id: number }>(
  list: T[],
  item: { id: number }
): number => list?.findIndex(({ id }) => id === item.id);
