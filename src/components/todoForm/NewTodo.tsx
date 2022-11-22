import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from '../../app/reducers/todoSlice';

const NewTodo = () => {
  const [inputState, setInputState] = useState('');
  const dispatch = useAppDispatch();

  const createTodo = () => {
    return {
      id: Date.now().toString(),
      description: inputState,
      isDone: false
    };
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(createTodo()));
    setInputState('');
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="TODO..."
        value={inputState}
        onChange={e => setInputState(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewTodo;
