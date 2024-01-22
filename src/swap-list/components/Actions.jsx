const Actions = ({ handleMoveToRight, handleMoveToLeft }) => {
  return (
    <div className="flex flex-v">
      <button className="list-action" onClick={handleMoveToRight}>&gt;</button>
      <button className="list-action" onClick={handleMoveToLeft}>&lt;</button>
    </div>
  );
};

export default Actions;