import { TodoProps } from '../types';

export function Todo({ todo, status, user }: TodoProps): JSX.Element {
  return (
    <>
      <li>
        <h3>{todo}</h3>
        <p>user {user}</p>
        <p>{status}</p>
      </li>
      <hr />
    </>
  );
}
