import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task">
      <div className={`task-item ${task.completed ? "completed" : ""}`}>
        {task.text}
      </div>
      <button onClick={handleDelete} className="trash-btn">
        &#10005;
      </button>
    </div>
  );
}

export default TaskItem;