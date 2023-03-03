import { useState } from 'react';
import './App.css';
import { TaskType, TodoList } from './components/Todolist/Todolist';

export type filterValuesType = "all" | "completed" | "active";

function App() {

  // let arr = useState(unitTasks);
  // let tasks = arr[0];
  // let setTasks = arr[1];
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]);
  let [filter, setFilter] = useState<filterValuesType>("all");
  function removeTask(id: number) {
    let filteredTasks = tasks.filter(el => el.id !== id)
    console.log(tasks);
    setTasks(filteredTasks);
  }
  function changeFilter(value: filterValuesType) {
    setFilter(value);
  }
  let tasksForTodoList = tasks;
  if (filter === "completed") {
    tasksForTodoList = tasks.filter(t => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter(t => t.isDone === false);
  }

  return (
    <div className="App">
      <TodoList title="What to learn" tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
