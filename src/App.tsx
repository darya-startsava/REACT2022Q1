import React from 'react';
import { useReducer } from 'react';
import './App.css';
import Router from './components/Router';
import Header from './components/Header';
import CardType from './types/card';
import { CustomStore } from './store';

function App() {
  const initialArg: CardType[] = [];

  function reducer(state: CardType[] | [], action: { type: string; payload: CardType }) {
    switch (action.type) {
      case 'addCard':
        return [...state, action.payload];
      default:
        throw new Error();
    }
  }

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
