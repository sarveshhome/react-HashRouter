import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log('reducer call');
  return state;
};

const store = createStore(reducer,0);
