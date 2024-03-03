export interface DataTodo {
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

type TodoStatus = 'active' | 'inactive';

export interface TodoProps {
  todo: string;
  status?: TodoStatus;
  user: number;
}
