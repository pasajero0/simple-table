import { TableHead } from './table-head/table-head';
import { useTable } from './table.hook';
import { POST_HEADER_OPTIONS } from './table.options';

export const Table = () => {
  const [data, onChangeOrder] = useTable();

  return (
    <table>
      <TableHead options={POST_HEADER_OPTIONS} onItemClick={onChangeOrder} />
      <tbody>
        {data.map(({ userId, title, id }) => (
          <tr key={id}>
            <td>{userId}</td>
            <td>{title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
