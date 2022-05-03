import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import LocalStorageMock from '../mocks/localStorageMock';

describe('Search bar', () => {
  beforeEach(() => {
    Object.defineProperty(global, '_localStorage', {
      value: new LocalStorageMock(),
      writable: true,
    });
  });

  it('should show the value from local storage', () => {
    global.localStorage.setItem('value', 'test1');
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });

  it('should save the value to local storage when unmount', () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.queryByPlaceholderText('Search movie by title') as HTMLInputElement;
    userEvent.type(input, 'test2');
    unmount();
    expect(global.localStorage.getItem('value')).toBe('test2');
  });
});
