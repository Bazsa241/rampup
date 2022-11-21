import { useAppSelector } from '../../app/hooks';
import { selectEdit } from '../../app/reducers/todoSlice';
import NewTodo from './NewTodo';
import EditTodo from './EditTodo';

const TodoForm = () => {
  const edit = useAppSelector(selectEdit);

  return <div className="container my-5">{edit ? <EditTodo /> : <NewTodo />}</div>;
};

export default TodoForm;
