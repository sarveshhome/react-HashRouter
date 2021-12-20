import React from 'react';
import store from '../store/index.js';

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
);

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
const ValueStore = () => {
  return <></>;
};

export default ValueStore;
