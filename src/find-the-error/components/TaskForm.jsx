import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(addTask(task));
    setTask('');
  };
  
  return (
    <div className='flex flex-column'>
      <input 
        value={task}
        onChange={handleChange}
        type="text" 
        placeholder="Enter a task"
        className='task-input'
      />
      <button onClick={handleClick} className='task-button'>Add Task</button>
    </div>
  );
};

export default TaskForm;