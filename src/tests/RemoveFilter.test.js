import React from 'react';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockFetch from './helpers/mockFetch';

describe('Testa se é possivel Remover filtragens', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    render(<App />);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Verifica se ao remover a filtragem aparece o Planeta tatooine aparece na tela e o card da filtragem some.', async () => {
    await waitFor(() => expect(screen.getByText(/^Naboo$/i, { selector: 'td' })).toBeInTheDocument());

    const [inputSelect] = screen.getAllByRole('combobox', { name: /coluna/i });
    const inputNumber = screen.getByRole('spinbutton');
    const buttonFilter = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(inputSelect, 'rotation_period');
    userEvent.type(inputNumber, '26');
    userEvent.click(buttonFilter);

    const filteredPlanet = screen.getByRole('cell', {  name: /kamino/i});
    const filter = screen.getByText(/rotation_period maior que 026/i);
    const removeFilterButton = screen.getByRole('button', { name: /x/i });

    expect(removeFilterButton).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(filteredPlanet).toBeInTheDocument();

    userEvent.click(removeFilterButton);

    const tatooinePlanet = screen.getByRole('cell', { name: /tatooine/i });

    expect(removeFilterButton).not.toBeInTheDocument();
    expect(filter).not.toBeInTheDocument();
    expect(tatooinePlanet).toBeInTheDocument();
  });
});
