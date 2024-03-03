type TodoStatus = 'active' | 'inactive';

interface TodoProps {
  todo: string;
  status?: TodoStatus;
}

export function Todo({ todo, status }: TodoProps): JSX.Element {
  return (
    <>
      <li>
        <h3>{todo}</h3>
        <p>{status}</p>
      </li>
      <hr />
    </>
  );
}
