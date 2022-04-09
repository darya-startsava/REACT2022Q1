import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('router test', () => {
  it('following links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const aboutUsLink = screen.getByTestId('about-us-link');
    userEvent.click(aboutUsLink);
    expect(screen.getByTestId('about-us-page')).toBeInTheDocument();
    const homeLink = screen.getByTestId('home-link');
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    const formsLink = screen.getByTestId('forms-link');
    userEvent.click(formsLink);
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });

  it('show error page if wrong link', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-path']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
