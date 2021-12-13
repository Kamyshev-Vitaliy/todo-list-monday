import React, {FC} from 'react';

type TasksPropsType = {
  id: number,
  title: string,
  isDone: boolean,
}

type TodoListPropsType = {
  title: string
  task: Array<TasksPropsType>
  deleteTasksItem: (id: number) => void
}

export const TodoList: FC<TodoListPropsType> = ({title, task, deleteTasksItem}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {
          task.map((t) =>
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
              <button onClick={() => deleteTasksItem(t.id)}>X</button>
            </li>)
        }
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

