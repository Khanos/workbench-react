import React from 'react';

export default function TodoItem({ todo, toggleTodo }){
    const {id, task, completed} = todo;
    const handleTodoClick = () => toggleTodo(id);
    return (<li id="{id}" className="todo-list-item" align="left">
        <input onChange={handleTodoClick} className="todo-list-item-checkbox" checked={completed} type="checkbox"/> {task}
    </li>)
}