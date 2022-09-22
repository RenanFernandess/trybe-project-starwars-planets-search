import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mockFetch from './helpers/mockFetch';

describe('Testa se é possivel filtrar os planetas', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    render(<App />);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Testa se é possivel filtrar por nome', async () => {
    await waitFor(() => expect(screen.getByText(/^Naboo$/i, { selector: 'td' })).toBeInTheDocument())

    const Kamino = screen.getByRole('cell', { name: /^Kamino$/i });

    userEvent.type(screen.getByTestId('name-filter'), 'Naboo');

    expect(screen.getByRole('cell', { name: /^Naboo$/i })).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(2);
    expect(Kamino).not.toBeInTheDocument();
  });
}); 