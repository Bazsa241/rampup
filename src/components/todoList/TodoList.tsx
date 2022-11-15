import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  return (
    <div className="TodoList">
      <h3>Todo list</h3>
      <div className="d-grid gap-2">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
