import { useEffect, useState } from 'react';
import './App.css';

interface DataTodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export function App(): JSX.Element {
  // const [name, setName] = useState<string>('Fran');
  // const [isActive, setIsActive] = useState<boolean>(false);
  const [todosList, setTodoList] = useState<DataTodo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch('https://dummyjson.com/todos');
      const data = await res.json();

      setTodoList(data.todos);
    }
    getTodos();
  }, []);

  return (
    <>
      <ul>
        {todosList.map((todo) => {
          return <li key={todo.id}>{todo.todo}</li>;
        })}
      </ul>
    </>
  );
}
