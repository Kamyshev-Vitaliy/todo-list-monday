import React, {FC} from 'react';

import {TasksT1} from "../App";
import {Buttons} from "./Buttons/Buttons";

type TodoListPropsType = {
  title: string,
  tasks: Array<TasksT1>
  buttonDeleteTask: (id: number) => void
}

export const TodoList: FC<TodoListPropsType> = ({title, tasks, buttonDeleteTask}) => {
  
  
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
        <Buttons/>
        {/*<button>All</button>*/}
        {/*<button>Active</button>*/}
        {/*<button>Completed</button>*/}
      </div>
    
    </div>
  );
}