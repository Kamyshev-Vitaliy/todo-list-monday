import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";


export const App = () => {
  const taskKey1 = 'taskID1';
  const taskKey2 = 'taskID2';

  const [task, setTask] = useState({
    [taskKey1]: [
      {id: 1, title: 'React', isDone: true},
      {id: 2, title: 'TypeScript', isDone: false},
      {id: 3, title: 'Redux', isDone: false},
      {id: 4, title: 'CSS', isDone: true},
    ],
    [taskKey2]: [
      {id: 5, title: 'Milk', isDone: true},
      {id: 6, title: 'Fresh', isDone: false},
      {id: 7, title: 'Bread', isDone: false},
      {id: 8, title: 'Cheaps', isDone: true},
    ]
  })


  const deleteTasksItem = (id: number) => {
    console.log([taskKey1])
  }

  return (
    <div className="App">
      {/*<TodoList title={[taskKey1]}*/}
      {/*          task={task[taskKey1]}*/}
      {/*          deleteTasksItem={deleteTasksItem}*/}
      {/*          key={taskKey1}/>*/}

      <TodoList title={'What to by'}
                task={task[taskKey2]}
                deleteTasksItem={deleteTasksItem}
                key={taskKey2}/>
    </div>
  );
}

