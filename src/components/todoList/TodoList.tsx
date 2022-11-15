import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  return (
    <div className="TodoList">
      <h3>Todo list</h3>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
