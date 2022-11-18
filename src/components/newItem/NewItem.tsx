import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from '../../app/reducers/todoSlice';
import { ITodo } from '../../types/todo';

const NewItem = () => {
  const dispatch = useAppDispatch();
  const [inputState, setInputState] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id: Date.now().toString(),
      description: inputState,
      isDone: false
    };
    dispatch(addTodo(newTodo));
    setInputState('');
  };

  return (
    <div className="container my-5">
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          id="todoDescription"
          placeholder="TODO..."
          value={inputState}
          onChange={e => setInputState(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          + Add
        </button>
      </form>
    </div>
  );
};

export default NewItem;
