import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {FilterTaskType} from "./App";

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsTypeTodoList = {
  title: string
  tasks: Array<TaskType>
  removeTaskItemCallback: (id: string) => void
  filterTaskTypeCallBack: (statusTask: FilterTaskType) => void
  addTask: (inputTask: string) => void
}

export const Todolist: FC<PropsTypeTodoList> = ({
                                                  title,
                                                  tasks,
                                                  removeTaskItemCallback,
                                                  filterTaskTypeCallBack,
                                                  addTask,
                                                }) => {

  const [inputTask, setInputTask] = useState('');

  const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.currentTarget.value);
  }
  const onClickHandlerAddTask = () => {
    addTask(inputTask);
    setInputTask('');
  }
  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask(inputTask);
      setInputTask('');
    }
  }

  // const removeTask = (taskItem:string) => {
  //   removeTaskItemCallback(taskItem);
  // }

  const filterButtonType = (statusTask: FilterTaskType) => {
    filterTaskTypeCallBack(statusTask);
  }

  return <div>
    <h3>{title}</h3>

    <div>
      <input value={inputTask} onChange={onChangeHandlerInput} onKeyPress={onKeyPressHandler}/>
      <button onClick={onClickHandlerAddTask}>add task</button>
    </div>

    <ul>
      {tasks.map((m) => {
        const removeTask = () => {
          removeTaskItemCallback(m.id);
        }
        return (
          <li key={m.id}>
            <input type='checkbox' checked={m.isDone}/>
            <span>{m.title}</span>
            <button onClick={removeTask}>X</button>
          </li>
        )
      })}
    </ul>

    <div>
      <button onClick={() => filterButtonType('All')}>All</button>
      <button onClick={() => filterButtonType('Active')}>Active</button>
      <button onClick={() => filterButtonType('Completed')}>Completed</button>
    </div>
  </div>
}
