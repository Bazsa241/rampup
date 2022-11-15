import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  return (
    <div className="container d-grid gap-2">
      {/* <div className="d-grid gap-2"> */}
      <TodoItem />
      <TodoItem />
      <TodoItem />
      {/* </div> */}
    </div>
  );
};

export default TodoList;
