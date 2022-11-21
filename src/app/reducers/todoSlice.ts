import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ITodo, ITodoState } from '../../types/todo';

const initialState: ITodoState = {
  todos: [
    { id: '1', description: 'First todo', isDone: false },
    { id: '2', description: 'Second todo', isDone: true },
    { id: '3', description: 'Third todo', isDone: false }
  ],
  edit: null
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<ITodo['id']>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[todoIndex] = { ...state.todos[todoIndex], ...action.payload };
      state.edit = null;
    },
    toggleTodoStatus: (state, action: PayloadAction<ITodo>) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[todoIndex] = {
        ...state.todos[todoIndex],
        isDone: action.payload.isDone
      };
    },
    addToEdit: (state, action: PayloadAction<ITodo>) => {
      state.edit = null;
      state.edit = action.payload;
    }
  }
});

export const { addTodo, removeTodo, editTodo, addToEdit, toggleTodoStatus } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectEdit = (state: RootState) => state.todos.edit;

export default todoSlice.reducer;
