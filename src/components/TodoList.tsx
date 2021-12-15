import React, {Dispatch, FC, SetStateAction} from 'react';
import {FilterType, TasksT1} from "../App";


type TodoListPropsType = {
  title: string,
  tasks: Array<TasksT1>,
  buttonDeleteTask: (id: number) => void,
  setFilterTask: Dispatch<SetStateAction<FilterType>>,
  // filterStatusTask: (statusTask: string) => void,
}

export const TodoList: FC<TodoListPropsType> = ({title, tasks, buttonDeleteTask, setFilterTask}) => {
  
  
  return (
    <div>
      <h3>{title}</h3>
      
      <div>
        <input/>
        <button>+</button>
      </div>
      
      <ul>
        
        {tasks.map((t) => {
          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
              <button onClick={() => buttonDeleteTask(t.id)}>X
              </button>
            </li>
          )
        })}
      
      </ul>
      
      <div>
        <button onClick={() => setFilterTask('All')}>All</button>
        <button onClick={() => setFilterTask('Active')}>Active</button>
        <button onClick={() => setFilterTask('Completed')}>Completed</button>
      </div>
    
    </div>
  );
}