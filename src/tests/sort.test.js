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

  it('Verifica se é possivel ordernar em orden crescente.', async () => {
    await waitFor(() => expect(screen.getByRole('cell', { name: /tatooine/i })).toBeInTheDocument());

    const selectInput = screen.getAllByRole('combobox', { name: /coluna/i });
    const ascendenteRadio = screen.getByRole('radio', { name: /ascendente/i });
    const sortButton = screen.getByRole('button', { name: /ordenar/i });

    userEvent.selectOptions(selectInput[1], 'rotation_period');
    userEvent.click(ascendenteRadio);
    userEvent.click(sortButton);

    const planets = screen.getAllByTestId('planet-name');
    const firstPlanet = planets[0]
    const lastPlanet = planets[planets.length - 1];

    expect(firstPlanet).toHaveTextContent(/bespin/i);
    expect(lastPlanet).toHaveTextContent(/kamino/i);
  });

  it('Verifica se é possivel ordernar em orden decrescente.', async () => {
    await waitFor(() => expect(screen.getByRole('cell', { name: /tatooine/i })).toBeInTheDocument());

    const selectInput = screen.getAllByRole('combobox', { name: /coluna/i });
    const descendenteRadio = screen.getByRole('radio', { name: /descendente/i });
    const sortButton = screen.getByRole('button', { name: /ordenar/i });

    userEvent.selectOptions(selectInput[1], 'rotation_period');
    userEvent.click(descendenteRadio);
    userEvent.click(sortButton);

    const planets = screen.getAllByTestId('planet-name');
    const firstPlanet = planets[0]
    const lastPlanet = planets[planets.length - 1];

    expect(firstPlanet).toHaveTextContent(/kamino/i);
    expect(lastPlanet).toHaveTextContent(/bespin/i);
  });

  it('Verifica se planetas com informações desconhecidas ficam no final da lista ao ordernar em orden crescente.', async () => {
    await waitFor(() => expect(screen.getByRole('cell', { name: /tatooine/i })).toBeInTheDocument());

    const ascendenteRadio = screen.getByRole('radio', { name: /ascendente/i });

    const sortButton = screen.getByRole('button', { name: /ordenar/i });

    userEvent.click(ascendenteRadio);
    userEvent.click(sortButton);

    const planets = screen.getAllByTestId('planet-name');
    const firstPlanet = planets[0]
    const lastPlanet = planets[planets.length - 1];

    expect(firstPlanet).toHaveTextContent(/yavin iv/i);
    expect(lastPlanet).toHaveTextContent(/hoth/i);
  });

  it('Verifica se planetas com informações desconhecidas ficam no final da lista ao ordernar em orden decrescente.', async () => {
    await waitFor(() => expect(screen.getByRole('cell', { name: /tatooine/i })).toBeInTheDocument());

    const descendenteRadio = screen.getByRole('radio', { name: /descendente/i });
    const sortButton = screen.getByRole('button', { name: /ordenar/i });

    userEvent.click(descendenteRadio);
    userEvent.click(sortButton);

    const planets = screen.getAllByTestId('planet-name');
    const firstPlanet = planets[0]
    const lastPlanet = planets[planets.length - 1];

    expect(firstPlanet).toHaveTextContent(/coruscant/i);
    expect(lastPlanet).toHaveTextContent(/dagobah/i);
  });
});
