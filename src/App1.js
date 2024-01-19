import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App1.css";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TODOS_KEY = "todos";

function App() {
  const storedTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  const [todos, setTodos] = useState(storedTodos);
  const todoTaskRef = useRef();

  const handleAddTodo = () => {
    const taskName = todoTaskRef.current.value;
    if (taskName === "") return;
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: taskName,
        completed: false,
      },
    ]);
    todoTaskRef.current.value = "";
  };
  const handleClearTodo = () => {
    setTodos([]);
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const handleTest = (resetLayout) => {
    // consult the API and console.log the response
    console.log('Testing the API 1:', {resetLayout});
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log('Testing the API 2:', {resetLayout});
        return response.json()
      })
      .then((data) => {
        console.log('Testing the API 3:', {resetLayout});
        console.log(data)
      });
  };

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    // <div className="container">
    //   <button className="tabs">Domains</button>
    //   <button className="tabs">Contest</button>
    //   <button className="tabs">Progress</button>
    //   <button className="tabs">Leader Board</button>
    //   <button className="tabs">Jobs</button>
    // </div>
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
        <div id="form-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{display: 'flex', justifyContent: 'center'}}>
              <Form.Control
                ref={todoTaskRef}
                type="text"
                placeholder="New Task"
                style={{maxWidth: '300px', marginRight: '10px'}}
                autoFocus
              />
              {/* <Form.Control type="date" style={{maxWidth: '300px', marginLeft: '10px'}}/> */}
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button
              variant="primary"
              id="button-add-todo"
              onClick={handleAddTodo}
            >
              Save
            </Button>
            <Button
              variant="danger"
              id="button-clear-todo"
              onClick={handleClearTodo}
            >
              clear
            </Button>
            <Button
              variant="default"
              id="button-clear-todo"
              onClick={() => handleTest(true)}
            >
              Test
            </Button>
          </Form>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        {todos.length > 0 ? (
          <p>You have {todos.filter((el) => !el.completed).length} task left</p>
        ) : (
          <p>Let's add some tasks</p>
        )}
      </header>
    </div>
  );
}

export default App;
