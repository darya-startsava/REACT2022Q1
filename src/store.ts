import React from 'react';
import CardType from './types/card';

interface GlobalContext {
  state: CardType[] | [];
  dispatch: React.Dispatch<{
    type: string;
    payload: CardType;
  }>;
}

export const CustomStore = React.createContext<GlobalContext>({ state: [], dispatch: () => {} });
