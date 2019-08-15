import React, { Fragment } from 'react';
import { counterSlice } from './Store/root';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch, Selector} from 'react-redux';

const actions = counterSlice.actions;

type state = {count: number} | {count: any};

const App: React.FC = () => {
  const counter: Selector<state, any> = useSelector((state: state) => state.count);
  const dispatch = useDispatch();

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
