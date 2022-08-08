import Form from './Form';
import { render, screen, waitFor } from '@testing-library/react';
import { useReducer } from 'react';
import { CustomStore } from '../../store';
import { reducer } from '../../reducer';
import CardType from '../../types/card';
import { completeFields123, completeFields456, completeForm, fakeData } from '../../testHelper';

function Foo() {
  const initialArg: CardType[] = [];
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <CustomStore.Provider value={{ state, dispatch }}>
      <Form />
    </CustomStore.Provider>
  );
}

describe('form', () => {
  it('should show error messages for empty fields(4-6)', async () => {
    render(<Form />);

    completeFields123();

    await waitFor(() => {
      expect(
        screen.getByText('Choose country of birth') &&
          screen.getByText('Choose at least one genre') &&
          screen.getByText('Add file with extension .jpg or .png')
      ).toBeInTheDocument();
    });
  });

  it("shouldn't show them for completed fields(1-3)", async () => {
    render(<Form />);

    completeFields123();

    await waitFor(() => {
      expect(
        screen.queryByText('This field requires more than 1 symbol') &&
          screen.queryByText('This field must be filled') &&
          screen.queryByText('Choose gender')
      ).not.toBeInTheDocument();
    });
  });

  it('should show error messages for empty fields(1-3)', async () => {
    render(<Form />);

    completeFields456();

    await waitFor(() => {
      expect(
        screen.getByText('This field requires more than 1 symbol') &&
          screen.getByText('This field must be filled') &&
          screen.getByText('Choose gender')
      ).toBeInTheDocument();
    });
  });

  it("shouldn't show them for completed fields(4-6)", async () => {
    render(<Form />);

    completeFields456();
    await waitFor(() => {
      expect(
        screen.queryByText('Choose country of birth') &&
          screen.queryByText('Choose at least one genre') &&
          screen.queryByText('Add file with extension .jpg or .png')
      ).not.toBeInTheDocument();
    });
  });

  it('should create a new card if all fields are filled', async () => {
    render(<Foo />);
    completeForm();
    await waitFor(() => {
      expect(screen.getByRole('listitem')).toBeInTheDocument();
    });
  });

  it('should create 3 cards if submit 3 times', async () => {
    render(<Foo />);

    for (let i = 1; i <= 3; i++) {
      completeForm();
    }

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toEqual(fakeData.length);
    });
  });
});
