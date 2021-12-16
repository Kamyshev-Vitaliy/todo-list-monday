import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterTaskType = 'All' | 'Active' | 'Completed';

export const App = () => {

  const [task, setTask] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Redux", isDone: false}
  ])

  const [filter, setFilter] = useState<FilterTaskType>('All');

  let newReturnStatusTask;//Создаем копию для обработки тасок с поступающим типом

  switch (filter) {
    case 'Active':
      newReturnStatusTask = task.filter((f) => !f.isDone);
      break;
    case 'Completed':
      newReturnStatusTask = task.filter((f) => f.isDone);
      break;
    default:
      newReturnStatusTask = task;
  }

  // let tasks1 = [
  //   {id: 1, title: "HTML&CSS", isDone: true},
  //   {id: 2, title: "JS", isDone: true},
  //   {id: 3, title: "ReactJS", isDone: false}
  // ]
  // const tasks2 = [
  //   {id: 1, title: "Fresh", isDone: true},
  //   {id: 2, title: "Ice cream", isDone: false},
  //   {id: 3, title: "Milk", isDone: true}
  // ]


  const removeTaskItemCallback = (mId: number) => {
    setTask(task.filter((f) => f.id !== mId))
  }

  const filterTaskTypeCallBack = (statusTask: FilterTaskType) => {
    setFilter(statusTask)
  }


  return (
    <div className="App">
      <Todolist title={'What to learn'}
                tasks={newReturnStatusTask}
                removeTaskItemCallback={removeTaskItemCallback}
                filterTaskTypeCallBack={filterTaskTypeCallBack}
      />
      {/*<Todolist title="What to by" tasks={tasks2}*/}
      {/*          removeTaskItem={removeTaskItem}/>*/}
    </div>
  );
}

