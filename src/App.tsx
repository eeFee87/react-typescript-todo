import { useEffect, useState } from 'react';
import { Todo } from './components/Todo';
import './App.css';

interface DataTodo {
  limit: number;
  skip: number;
  todos: {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }[];
  total: number;
}

export function App(): JSX.Element {
  // const [name, setName] = useState<string>('Fran');
  // const [isActive, setIsActive] = useState<boolean>(false);
  const [todosList, setTodoList] = useState<DataTodo>();

  useEffect(() => {
    async function getTodos() {
      const res = await fetch('https://dummyjson.com/todos');
      const data = await res.json();
      console.log(data);
      setTodoList(data);
    }
    getTodos();
  }, []);

  return (
    <>
      <ul>
        {todosList?.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo.todo}
              status={todo.completed ? 'active' : 'inactive'}
            />
          );
        })}
      </ul>
    </>
  );
}
