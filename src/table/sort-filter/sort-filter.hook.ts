import { useMemo, useState } from 'react';
import { SortEnum } from './sort-filter.enum';

export const useSortFilter = (
  sorts: Record<string, SortEnum> = {}
): [Record<string, SortEnum>, (name: string, type: SortEnum) => void] => {
  const [sort, setSortChange] = useState(sorts);

  const onSortChange = (name: string, type: SortEnum) =>
    setSortChange(currentSort => ({ ...currentSort, [name]: type }));

  return useMemo(() => [sort, onSortChange], [sort]);
};
