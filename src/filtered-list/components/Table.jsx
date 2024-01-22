import { useState } from 'react';
import Header from './Header';
import TableBody from './TableBody';

const Table = ({breeds}) => {
  const [filter, setFilter] = useState({
    col: 'id',
    dir: 'asc'
  });

  return (
    <table>
      <Header filter={filter} setFilter={setFilter} />
      <TableBody breeds={breeds} filter={filter}/>
    </table>
  );
}

export default Table;