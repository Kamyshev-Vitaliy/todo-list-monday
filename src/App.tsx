import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

export type TasksT1 = {
  id: number,
  title: string,
  isDone: boolean,
}


function App() {
  
  const [task, setTask] = useState([
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JS', isDone: true},
    {id: 4, title: 'React', isDone: false},
    {id: 5, title: 'Redux', isDone: false},
  ])
  
  // const tasksT2 = [
  //   {id: 5, title: 'Milk', isDone: true},
  //   {id: 6, title: 'Fresh', isDone: true},
  //   {id: 7, title: 'Bear', isDone: false},
  //   {id: 8, title: 'Cheaps', isDone: false},
  // ]
  
  const buttonDeleteTask = (id: number) => {
    setTask(task.filter((f) => f.id !== id))
  }
  return (
    <div className="App">
      <TodoList title={'What to learn'}
                tasks={task}
                buttonDeleteTask={buttonDeleteTask}
      />
      {/*<TodoList title={'What to by'}*/}
      {/*          tasks={tasksT2}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
