import { ITodo } from '../../types/todo';
import { useAppDispatch } from '../../app/hooks';
import { removeTodo, editTodo } from '../../app/reducers/todoSlice';

const TodoItem = ({ id, description, isDone }: ITodo) => {
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom pb-2">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isDone}
          onChange={() => dispatch(editTodo({ id, isDone: !isDone }))}
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {description}
        </label>
      </div>
      <div className="d-flex gap-1">
        <button className="btn btn-sm btn-outline-secondary">
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeTodo(id))}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
