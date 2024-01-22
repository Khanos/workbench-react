import Item from './Item';

const List = ({ items, handleCheck }) => {
  return (
    <div className="list flex-v">
      { items.map((item, index) => {
        return (
          <Item item={item} handleCheck={handleCheck} key={index} />
        );
      })}
    </div>
  );
};

export default List;