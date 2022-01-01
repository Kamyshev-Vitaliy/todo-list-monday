import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {FilterTaskType} from "./App";
import style from './TodoList.module.css';
import {TaskMap} from "./TaskMap";

export type TaskType = {
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
  taskStatusCheck: (taskStatusID: string, value: boolean) => void
  filter:FilterTaskType
}

export const Todolist: FC<PropsTypeTodoList> = ({
                                                  title,
                                                  tasks,
                                                  removeTaskItemCallback,
                                                  filterTaskTypeCallBack,
                                                  addTask,
                                                  taskStatusCheck,
                                                  filter
                                                }) => {


  const [inputTask, setInputTask] = useState('');
  const [error, setError] = useState(false);

  const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setInputTask(event.currentTarget.value);
  }
  const onClickHandlerAddTask = () => {
    if (inputTask.trim()) {
      addTask(inputTask.trim());
      setInputTask('');
    }else{
      setError(true);
    }
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask(inputTask);
      setInputTask('');
    }
  }
  const filterButtonType = (statusTask: FilterTaskType) => {
    filterTaskTypeCallBack(statusTask);
  }

  const onChangeButtonCheckBox = (taskID: string, taskStatus: boolean) => {
    taskStatusCheck(taskID, taskStatus);
  }
  const removeTask = (id: string) => {
    removeTaskItemCallback(id);
  }

  return <div>
    <h3>{title}</h3>

    <div>
      <input value={inputTask}
             onChange={onChangeHandlerInput}
             onKeyPress={onKeyPressHandler}
             className={error ? style.error : ''}
      />
      <button onClick={onClickHandlerAddTask}>add task</button>
      <div>{error && <div className={style.error_message}>Title is required!</div>}</div>
    </div>

    <TaskMap tasks={tasks}
             onChangeButtonCheckBox={onChangeButtonCheckBox}
             removeTask={removeTask}
    />

    <div>
      <button className={filter === 'All' ? style.active_filter : ''} onClick={() => filterButtonType('All')}>All</button>
      <button className={filter === 'Active' ? style.active_filter : ''} onClick={() => filterButtonType('Active')}>Active</button>
      <button className={filter === 'Completed' ? style.active_filter : ''} onClick={() => filterButtonType('Completed')}>Completed</button>
    </div>

  </div>
}
