import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import mockFetch from './helpers/mockFetch';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Test se é possivel ordernar os planetas', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    render(<App />);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Verifica se é possivel ordernar em orden crescente', async () => {
    await waitFor(() => expect(screen.getByRole('cell', { name: /tatooine/i })).toBeInTheDocument());

    const selectInput = screen.getAllByRole('combobox', { name: /coluna/i });
    const ascendenteRadio = screen.getByRole('radio', { name: /ascendente/i });
    const sortButton = screen.getByRole('button', { name: /ordenar/i });

    userEvent.selectOptions(selectInput[1], 'rotation_period');
    userEvent.click(ascendenteRadio);
    userEvent.click(sortButton);

    const [firstPlanet] = screen.getAllByTestId('planet-name');

    expect(firstPlanet).toHaveTextContent(/bespin/i);
  });
});
