import { TableHeadProps } from './table-head.interface';
import { noop } from './table-head.helpers';

export const TableHead = <V extends string>({ options = [], onItemClick = noop }: TableHeadProps<V>) => {
  return (
    <thead>
      <tr>
        {options.map(({ value, title }) => (
          <th key={value}>
            <button onClick={onItemClick(value)}>
              <span>{title}</span>
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
};
