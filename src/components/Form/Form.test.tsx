import Form from './Form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('form', () => {
  it("should show error messages for empty fields, but shouldn't show them for completed fields(1-3)", () => {
    const { container } = render(<Form />);

    userEvent.type(getName(), 'Name');
    userEvent.click(getGender());
    userEvent.type(getDate(), '2021-04-04');
    userEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(container).toMatchSnapshot();
  });

  it("should show error messages for empty fields, but shouldn't show them for completed fields(4-6)", () => {
    const { container } = render(<Form />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    userEvent.selectOptions(getCountry(), ['UK']);
    userEvent.click(getGenres());
    userEvent.click(screen.getByRole('button', { name: /Submit/i }));
    userEvent.upload(getImage(), file);
    expect(container).toMatchSnapshot();
  });

  it('should create a new card if all fields are filled', () => {
    const { container } = render(<Form />);

    completeForm();
    expect(container).toMatchSnapshot();
  });

  it('should create 3 cards if submit 3 times', () => {
    const { container } = render(<Form />);

    for (let i = 1; i <= 3; i++) {
      completeForm();
    }
    expect(container).toMatchSnapshot();
  });
});

function getName() {
  return screen.getByRole('textbox', {
    name: /name:/i,
  });
}

function getGender() {
  return screen.getByRole('radio', {
    name: /female/i,
  });
}

function getDate() {
  return screen.getByLabelText(/Date of Birth:/i);
}

function getCountry() {
  return screen.getByRole('combobox', { name: /Country of Birth:/i });
}

function getGenres() {
  return screen.getByRole('checkbox', {
    name: /science fiction/i,
  });
}

function getImage() {
  return screen.getByLabelText(/upload file/i);
}

function completeForm() {
  global.URL.createObjectURL = jest.fn();
  userEvent.type(getName(), 'Name');
  userEvent.click(getGender());
  userEvent.type(getDate(), '2021-04-04');
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  userEvent.selectOptions(getCountry(), ['UK']);
  userEvent.click(getGenres());
  userEvent.upload(getImage(), file);
  userEvent.click(screen.getByRole('button', { name: /Submit/i }));
}
