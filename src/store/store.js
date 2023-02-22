import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addToDo = createAction('ADD');
export const deleteToDo = createAction('DELETE');

console.log('ADD : ', addToDo(2), 'DELETE : ', deleteToDo(2));

// RTK
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export default store;
