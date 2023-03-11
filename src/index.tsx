import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Table } from './table/table';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Table />
  </StrictMode>
);
