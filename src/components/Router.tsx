import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs';
import Error404 from '../pages/Error404';
import Forms from '../pages/Forms';
import { useReducer } from 'react';
import CardType from '../types/card';

export default function Router() {
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

  function handleCreateCard(data: CardType) {
    console.log(data);
    dispatch({ type: 'addCard', payload: data });
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="forms" element={<Forms state={state} onCreateCard={handleCreateCard} />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
