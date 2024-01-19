const Item = ({ item, handleCheck }) => {
  return (
    <label className="list-item flex">
      <input 
        type="checkbox" 
        onChange={() => handleCheck(item)} 
      />
      {item}
    </label>
  )
};

export default Item;