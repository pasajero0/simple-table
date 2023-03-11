export interface TableHeadOptionInterface<T> {
  title: string;
  value: T;
}

export interface TableHeadProps<V> {
  options?: TableHeadOptionInterface<V>[];
  onItemClick?: <T extends string>(value: T) => () => void;
}
