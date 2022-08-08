import React from 'react';
import { useReducer } from 'react';
import './App.css';
import Router from './components/Router';
import Header from './components/Header';
import CardType from './types/card';
import { CustomStore } from './store';
import { reducer } from './reducer';

function App() {
  const initialArg: CardType[] = [];

  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <CustomStore.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Router />
      </div>
    </CustomStore.Provider>
  );
}

export default App;
