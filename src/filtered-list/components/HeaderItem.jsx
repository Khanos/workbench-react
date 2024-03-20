const HeaderItem = ({title, children}) => {
  return (
    <div className='th-container'>
      <div>{ title }</div> 
      {children}
    </div>
  );
};

export default HeaderItem;