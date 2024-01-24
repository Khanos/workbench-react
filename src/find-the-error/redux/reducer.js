import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionTypes";
const initialState = {
  tasks: [
    {
      id: 1,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 2,
      text: 'Learn React',
      completed: true,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: Math.floor(Math.random() * 1000),
          text: action.payload.text,
          completed: false,
        }],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default taskReducer;