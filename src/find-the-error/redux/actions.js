import { ADD_TASK } from './actionTypes'

export const addTask = (text) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Math.floor(Math.random() * 1000),
      text: text,
      completed: false,
    },
  }
}

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: {
      id,
    },
  }
}

export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: {
      id,
    },
  }
}