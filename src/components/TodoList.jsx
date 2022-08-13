import React from 'react';
import TodoItem from './TodoItem';
import Table from 'react-bootstrap/Table';

export default function TodoList({ todos, toggleTodo }){
    return (
    <Table className="todo-list-item text-center" striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Task</th>
                <th width="10%">Completed</th>
            </tr>
        </thead>
        { todos.map( (todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index} toggleTodo={toggleTodo}/>
        )) }
    </Table>)
}