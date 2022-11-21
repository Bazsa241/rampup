import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import TodoForm from './components/todoForm/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
