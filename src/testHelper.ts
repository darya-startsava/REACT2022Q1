import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const fakeData = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
];

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

export function completeFields123() {
  userEvent.type(getName(), 'Name');
  userEvent.click(getGender());
  userEvent.type(getDate(), '2021-04-04');
  userEvent.click(screen.getByRole('button', { name: /Submit/i }));
}

export function completeFields456() {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.selectOptions(getCountry(), ['UK']);
  userEvent.click(getGenres());
  userEvent.upload(getImage(), file);
  userEvent.click(screen.getByRole('button', { name: /Submit/i }));
}

export function completeForm() {
  global.URL.createObjectURL = jest.fn(() => 'test');
  userEvent.type(getName(), 'Name');
  userEvent.click(getGender());
  userEvent.type(getDate(), '2021-04-04');
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  userEvent.selectOptions(getCountry(), ['UK']);
  userEvent.click(getGenres());
  userEvent.upload(getImage(), file);
  userEvent.click(screen.getByRole('button', { name: /Submit/i }));
}
