import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  return (
    <div className="container d-grid gap-2">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
