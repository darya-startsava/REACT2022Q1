import { render, screen } from '@testing-library/react';
import CardList from './card-list';
import '@testing-library/jest-dom/extend-expect';

const fakeData = [{ id: 1 }, { id: 2 }];
jest.mock('../data/films-information', () => fakeData);

describe('Card list', () => {
  it('all components shown', () => {
    render(<CardList />);
    expect(screen.getAllByRole('listitem').length).toEqual(fakeData.length);
  });
});
