export interface ITodo {
  id: string;
  description?: string;
  isDone?: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  edit: ITodo | null;
}
