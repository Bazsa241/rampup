import { useState, useEffect, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editTodo, selectEdit } from '../../app/reducers/todoSlice';

const EditTodo = () => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectEdit);
  const [inputState, setInputState] = useState(todo?.description || '');

  useEffect(() => {
    setInputState(todo?.description || '');
  }, [todo]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todo &&
      dispatch(
        editTodo({
          ...todo,
          description: inputState
        })
      );
    setInputState('');
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={inputState}
        onChange={e => setInputState(e.target.value)}
        autoFocus
      />
      <button className="btn btn-warning" type="submit">
        Edit
      </button>
    </form>
  );
};

export default EditTodo;
