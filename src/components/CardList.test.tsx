import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import '@testing-library/jest-dom/extend-expect';

const fakeData = [
  { id: 1, name: '1', isFull: false },
  { id: 2, name: '2', isFull: false },
];

describe('Card list', () => {
  it('should render all cards', () => {
    render(<CardList data={fakeData} />);
    expect(screen.getAllByRole('listitem').length).toEqual(fakeData.length);
  });
});
