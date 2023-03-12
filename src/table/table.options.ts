import { SortEnum } from './sort-filter/sort-filter.enum';
import { PostValueEnum } from './table.enum';

export const POST_SORT_INITIAL = { [PostValueEnum.USER_ID]: SortEnum.ASC, [PostValueEnum.TITLE]: SortEnum.ASC };

export const POST_HEADER_OPTIONS = [
  {
    title: 'User ID',
    value: PostValueEnum.USER_ID,
  },
  {
    title: 'Post title',
    value: PostValueEnum.TITLE,
  },
];
