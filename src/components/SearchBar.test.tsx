import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Search bar', () => {
  beforeEach(() => {
    class LocalStorageMock {
      store: Record<string, string>;
      length = 0;
      constructor() {
        this.store = {};
      }

      key(index: number) {
        return Object.keys(this.store)[index];
      }

      clear() {
        this.store = {};
      }

      getItem(key: string) {
        return this.store[key] || null;
      }

      setItem(key: string, value: string) {
        this.store[key] = String(value);
      }

      removeItem(key: string) {
        delete this.store[key];
      }
    }

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
    const input = screen.queryByPlaceholderText('Search bar') as HTMLInputElement;
    userEvent.type(input, 'test2');
    unmount();
    expect(global.localStorage.getItem('value')).toBe('test2');
  });
});
