import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import userEvent from '@testing-library/user-event';
import constants from '../../constants';
import LocalStorageMock from '../../mocks/localStorageMock';

describe('Page Home', () => {
  beforeEach(() => {
    Object.defineProperty(global, '_localStorage', {
      value: new LocalStorageMock(),
      writable: true,
    });
  });

  const data = {
    results: [
      {
        id: 0,
        name: 'title0',
        image: 'no-image.jpg',
        overview: 'overview0',
        releaseDate: 'release_date0',
        voteAverage: '0',
        isFull: false,
      },
      {
        id: 1,
        name: 'title1',
        image: 'no-image.jpg',
        overview: 'overview1',
        releaseDate: 'release_date1',
        voteAverage: '1',
        isFull: false,
      },
    ],
  };

  const server = setupServer(
    rest.get(`${constants.url}/3/search/movie`, (req, res, ctx) => res(ctx.json(data)))
  );

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.append(modalRoot);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should draw cards if the request is submitted', async () => {
    render(<Home />);
    const input = screen.queryByPlaceholderText('Search bar') as HTMLInputElement;
    userEvent.type(input, 'title');
    userEvent.keyboard('{Enter}');
    const card = await screen.findAllByTestId('card');
    expect(card.length).toEqual(2);
  });

  it('shoud open modal by clicking on the card', async () => {
    render(<Home />);
    const input = screen.queryByPlaceholderText('Search bar') as HTMLInputElement;
    userEvent.type(input, 'title');
    userEvent.keyboard('{Enter}');
    const card = await screen.findAllByTestId('card');
    userEvent.click(card[0]);
    expect(screen.getByText('Overview: overview0')).toBeInTheDocument();
    expect(screen.queryByText('Overview: overview1')).not.toBeInTheDocument();
  });

  it('shoud close modal by clicking on the overlay', async () => {
    render(<Home />);
    const input = screen.queryByPlaceholderText('Search bar') as HTMLInputElement;
    userEvent.type(input, 'title');
    userEvent.keyboard('{Enter}');
    const card = await screen.findAllByTestId('card');
    userEvent.click(card[0]);
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('overlay'));
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
  });
});
