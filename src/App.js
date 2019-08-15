import React, {Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { store, counterSlice } from './Store/root';
import {counter} from './Store/root';
import './App.css';

const actions = counterSlice.actions;

function App() {
  //Hooks
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();
  // console.log(store.getState());
  // store.dispatch(counter.actions.increment());
  // console.log(store.getState());
  return (
    <Fragment>
      count: {counter}
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
      <button onClick={() => setTimeout(() => dispatch(actions.decrement()), 5000)}>Async Operation</button>
    </Fragment>
  );
}

export default App;
