import { reducer } from './reducer';
import CardType from './types/card';

const cardInState: CardType = {
  id: 'cardInStateId',
  name: 'cardInState',
  isFull: false,
};

const newCard: CardType = {
  id: 'newCardId',
  name: 'newCard',
  isFull: false,
};

describe('reducer', () => {
  it('should throw Error if wrong action type', () => {
    const result = () => {
      reducer([cardInState], {
        type: 'wrongType',
        payload: newCard,
      });
    };
    expect(result).toThrow(Error);
  });

  it('should add new card if initial state is empty', () => {
    expect(reducer([], { type: 'addCard', payload: newCard })).toEqual([newCard]);
  });

  it('should add new card if initial state is not empty', () => {
    expect(reducer([cardInState], { type: 'addCard', payload: newCard })).toEqual([
      cardInState,
      newCard,
    ]);
  });
});
