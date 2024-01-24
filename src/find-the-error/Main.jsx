import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const Main = () => {
  return (
    <div className="main-container flex flex-column">
      <h2>Task Manager</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Main;