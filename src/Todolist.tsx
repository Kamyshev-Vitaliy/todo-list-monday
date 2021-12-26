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



  return <div>
    <h3>{title}</h3>

    <div>
      <input value={inputTask} onChange={onChangeHandlerInput} onKeyPress={onKeyPressHandler}/>
      <button onClick={onClickHandlerAddTask}>add task</button>
    </div>

    <ul>
      {tasks.map((m) => {
        return (
          <li key={m.id}>
            <input type='checkbox' checked={m.isDone}/>
            <span>{m.title}</span>
            <button onClick={() => removeTaskItemCallback(m.id)}>X</button>
          </li>
        )
      })}
    </ul>

    <div>
      <button onClick={() => filterTaskTypeCallBack('All')}>All</button>
      <button onClick={() => filterTaskTypeCallBack('Active')}>Active</button>
      <button onClick={() => filterTaskTypeCallBack('Completed')}>Completed</button>
    </div>
  </div>
}
