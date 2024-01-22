const ArrowIcon = ({identifier, filter, setFilter}) => {
  const sortHandler = (key) => {
    const newFilter = { col: key, dir: 'asc' };
    if(filter.col === key && filter.dir === 'asc'){
      newFilter.dir = 'desc';
    }
    setFilter(newFilter);
  };
  if(filter.col !== identifier) return <div onClick={() => sortHandler(identifier)} className="btn-filter">&#8722;</div>;
  return filter.dir === 'desc' ? 
    <div onClick={() => sortHandler(identifier)} className="btn-filter">&#8593;</div> : 
    <div onClick={() => sortHandler(identifier)} className="btn-filter">&#8595;</div>
};

export default ArrowIcon;
