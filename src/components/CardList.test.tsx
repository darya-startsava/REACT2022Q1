import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import '@testing-library/jest-dom/extend-expect';

const fakeData = [{ id: 1 }, { id: 2 }];
jest.mock('../data/films-information', () => fakeData);

describe('Card list', () => {
  it('should render all cards', () => {
    render(<CardList />);
    expect(screen.getAllByRole('listitem').length).toEqual(fakeData.length);
  });
});
