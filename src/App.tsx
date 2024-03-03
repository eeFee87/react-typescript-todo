import './App.css';
import { useEffect, useState } from 'react';
import { Todo } from './components/Todo';
import { DataTodo } from './types';

export function App(): JSX.Element {
  const [name, setName] = useState<string>('TypeScript');
  // const [isActive, setIsActive] = useState<boolean>(false);
  const [todosList, setTodoList] = useState<DataTodo>();

  useEffect(() => {
    async function getTodos() {
      const res = await fetch('https://dummyjson.com/todos');
      const data = await res.json();

      setTodoList(data);
    }
    getTodos();
  }, []);

  return (
    <>
      <h2>ToDo List With {name}</h2>
      <ul>
        {todosList?.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo.todo}
              user={todo.userId}
              status={todo.completed ? 'active' : 'inactive'}
            />
          );
        })}
      </ul>
    </>
  );
}
