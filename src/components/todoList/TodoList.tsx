import TodoItem from '../todoItem/TodoItem';
import { ITodo } from '../../types/todo';

const todos: ITodo[] = [
  { id: '1', description: 'First todo', isDone: false },
  { id: '2', description: 'Second todo', isDone: true },
  { id: '3', description: 'Third todo', isDone: false }
];

const TodoList = () => {
  return (
    <div className="container d-grid gap-2">
      {todos.map(todo => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
