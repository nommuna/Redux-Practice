import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux';

const App: React.FC = () => {
  const counter = useSelector((state: number) => state);

  return (
    <Fragment>
      <h1>counter: {counter.toString()}</h1>
    </Fragment>
  );
}

export default App;
