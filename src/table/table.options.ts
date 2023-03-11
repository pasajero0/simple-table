import { SortEnum } from './sort-filter/sort-filter.enum';
import { PostValueEnum } from './table.enum';

export const POST_SORT_INITIAL = { [PostValueEnum.ID]: SortEnum.ASC, [PostValueEnum.TITLE]: SortEnum.ASC };

export const POST_HEADER_OPTIONS = [
  {
    title: 'ID',
    value: PostValueEnum.ID,
  },
  {
    title: 'Title',
    value: PostValueEnum.TITLE,
  },
];
