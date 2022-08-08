import CardType from './types/card';

export function reducer(state: CardType[] | [], action: { type: string; payload: CardType }) {
  switch (action.type) {
    case 'addCard':
      return [...state, action.payload];
    default:
      throw new Error();
  }
}
