import React, {FC, useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from './Todolist';

export type FilterTaskType = 'All' | 'Active' | 'Completed';

export const App: FC = () => {

  const [task, setTask] = useState([
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "Redux", isDone: false}
  ])

  const [filter, setFilter] = useState<FilterTaskType>('All');

  let newReturnStatusTask;

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


  const removeTaskItemCallback = (mId: string) => {
    setTask(task.filter((f) => f.id !== mId))
  }
  const filterTaskTypeCallBack = (statusTask: FilterTaskType) => {
    setFilter(statusTask)
  }
  const addTask = (inputTask: string) => {
    setTask([{id: v1(), title: inputTask, isDone: false}, ...task]);
  }

  const taskStatusCheck = (taskID: string, taskStatus: boolean) => {
    setTask(task.map(m => m.id === taskID ? {...m, isDone: taskStatus} : m))
  }

  return (
    <div className="App">
      <Todolist title={'What to learn'}
                tasks={newReturnStatusTask}
                removeTaskItemCallback={removeTaskItemCallback}
                filterTaskTypeCallBack={filterTaskTypeCallBack}
                addTask={addTask}
                taskStatusCheck={taskStatusCheck}
                filter={filter}
      />
      {/*<Todolist title="What to by" tasks={tasks2}*/}
      {/*          removeTaskItem={removeTaskItem}/>*/}
    </div>
  );
}

