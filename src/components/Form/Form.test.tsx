import Form from './Form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const fakeData = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
];

describe('form', () => {
  it('should show error messages for empty fields(4-6)', () => {
    render(<Form />);

    completeFields123();
    expect(
      screen.getByText('Choose country of birth') &&
        screen.getByText('Choose at least one genre') &&
        screen.getByText('Add image')
    ).toBeInTheDocument();
  });

  it("shouldn't show them for completed fields(1-3)", () => {
    render(<Form />);

    completeFields123();
    expect(
      screen.queryByText('This field requires more than 1 symbol') &&
        screen.queryByText('This field must be filled') &&
        screen.queryByText('Choose gender')
    ).not.toBeInTheDocument();
  });

  it('should show error messages for empty fields(1-3)', () => {
    render(<Form />);

    completeFields456();
    expect(
      screen.getByText('This field requires more than 1 symbol') &&
        screen.getByText('This field must be filled') &&
        screen.getByText('Choose gender')
    ).toBeInTheDocument();
  });

  it("shouldn't show them for completed fields(4-6)", () => {
    render(<Form />);

    completeFields456();
    expect(
      screen.queryByText('Choose country of birth') &&
        screen.queryByText('Choose at least one genre') &&
        screen.queryByText('Add image')
    ).not.toBeInTheDocument();
  });

  it('should create a new card if all fields are filled', () => {
    const { container } = render(<Form />);

    completeForm();
    expect(container).toMatchSnapshot();
  });

  it('should create 3 cards if submit 3 times', () => {
    render(<Form />);

    for (let i = 1; i <= 3; i++) {
      completeForm();
    }
    expect(screen.getAllByRole('listitem').length).toEqual(fakeData.length);
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

function completeFields123() {
  userEvent.type(getName(), 'Name');
  userEvent.click(getGender());
  userEvent.type(getDate(), '2021-04-04');
  userEvent.click(screen.getByRole('button', { name: /Submit/i }));
}

function completeFields456() {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.selectOptions(getCountry(), ['UK']);
  userEvent.click(getGenres());
  userEvent.upload(getImage(), file);
  userEvent.click(screen.getByRole('button', { name: /Submit/i }));
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
