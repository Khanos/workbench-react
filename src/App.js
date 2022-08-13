import { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';

const TODOS_KEY = 'todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoTaskRef = useRef();

  const handleAddTodo = () => {
    const taskName = todoTaskRef.current.value;
    if( taskName === "" ) return;
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: taskName,
        completed: false
      }
    ]);
    todoTaskRef.current.value = "";
  }
  const handleClearTodo = () => {
    setTodos([]);
  }
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if( todo.id === id ) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    if( todos ) {
      setTodos(todos);
    }
  } , []);
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input ref={todoTaskRef} id="input-text-todo" type="text" placeholder="New Task"/>
        <div>
          <button id="button-add-todo" onClick={handleAddTodo}>Save</button>
          <button id="button-clear-todo" onClick={handleClearTodo}>clear</button>
        </div>
        <TodoList id="ul-todo-list" todos={todos} toggleTodo={toggleTodo}/>
        {todos.length > 0 ? (
          <p>You have {todos.filter(el => !el.completed).length} task left</p>
        ) : (
          <p>Let's add some tasks</p>
        )}
      </header>
    </div>
  );
}

export default App;
