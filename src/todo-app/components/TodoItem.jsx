import React from 'react';

export default function TodoItem({ todo, toggleTodo, index }){
    const {id, task, completed} = todo;
    const handleTodoClick = () => toggleTodo(id);
    return (
        <tbody>
            <tr>
                <td align="left">{index}</td>
                <td align="left">{task}</td>
                <td><input onChange={handleTodoClick} className="todo-list-item-checkbox" checked={completed} type="checkbox"/></td>
            </tr>
        </tbody>
    );
}