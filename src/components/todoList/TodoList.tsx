import TodoItem from '../todoItem/TodoItem';
import { useAppSelector } from '../../app/hooks';
import { selectTodos } from '../../app/reducers/todoSlice';

const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <div className="container d-grid gap-2">
      {todos.map(todo => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
