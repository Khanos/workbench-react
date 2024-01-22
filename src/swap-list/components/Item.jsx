const Item = ({ item, handleCheck }) => {
  return (
    <div className="list-item flex">
      <input 
        id={`checkbox-${item.id}`}
        type="checkbox" 
        onChange={() => handleCheck(item.id)}
        checked={item.check} 
      />
      <label htmlFor={`checkbox-${item.id}`}>
        {item.id}
      </label>
    </div>
  )
};

export default Item;