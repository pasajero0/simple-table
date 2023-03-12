import { useEffect, useState } from 'react';
import { SortEnum } from './sort-filter/sort-filter.enum';
import { fetchData } from './table.helpers';
import { useSortFilter } from './sort-filter/sort-filter.hook';
import { POST_SORT_INITIAL } from './table.options';
import { PostInterface } from './table.interface';
import { PostValueEnum } from './table.enum';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const useTable = (): [PostInterface[], <T extends string>(value: T) => () => void] => {
  const [data, setData] = useState<PostInterface[]>([]);
  const [sortFilters, onSortChange] = useSortFilter(POST_SORT_INITIAL);

  useEffect(() => void fetchData<PostInterface>(URL).then(res => setData(res)), []);

  const handleChangeOrder =
    <T extends string>(value: T) =>
    () => {
      const prevSort = sortFilters[value];
      const isDesc = prevSort === SortEnum.DESC;
      const newSort = isDesc ? SortEnum.ASC : SortEnum.DESC;

      onSortChange(value, newSort);

      setData(prev => {
        let items = [...prev];

        if (value === PostValueEnum.USER_ID) {
          items = items.sort((a, b) => a.userId - b.userId);
        }

        if (value === PostValueEnum.TITLE) {
          items = items.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }

            return 0;
          });
        }

        return isDesc ? items.reverse() : items;
      });
    };

  return [data, handleChangeOrder];
};
