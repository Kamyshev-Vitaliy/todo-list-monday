import style from "./TodoList.module.css";
import React, {FC} from "react";
import {TaskType} from "./Todolist";

interface TaskMap {
  tasks: Array<TaskType>
  onChangeButtonCheckBox: (taskID: string, taskStatus: boolean) => void
  removeTask: (id: string) => void
}

export const TaskMap: FC<TaskMap> = ({tasks, onChangeButtonCheckBox,removeTask}) => {
  return (
    <ul>
      {tasks.map((m) => {
        return (
          <li key={m.id} className={m.isDone ? style.isDone : ''}>
            <input type='checkbox' checked={m.isDone}
                   onChange={(e) => onChangeButtonCheckBox(m.id, e.currentTarget.checked)}/>
            <span>{m.title}</span>
            <button onClick={(e) => removeTask(m.id)}>X</button>
          </li>
        )
      })}
    </ul>
  );
}