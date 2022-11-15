import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import NewItem from './components/newItem/NewItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewItem />
      <TodoList />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
