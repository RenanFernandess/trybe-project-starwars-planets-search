import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockFetch from './helpers/mockFetch';

describe('Testa se é possui campos de filtragem e uma tabela', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    render(<App />);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Verifica se possui um input de texto para filtrar por nome', () => {
    expect(screen.getByTestId('name-filter')).toBeInTheDocument();
  })

  it('Verifica se possui um form de filtragem Numerica', () => {
    const inputColumn = screen.getByTestId('column-filter');
    const inputComparison = screen.getByTestId('comparison-filter');

    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(inputColumn).toBeInTheDocument();
    expect(inputColumn.options).toHaveLength(5);
    expect(inputComparison).toBeInTheDocument();
    expect(inputComparison.options).toHaveLength(3);
    expect(screen.getByRole('button', { name: /Filtrar/i })).toBeInTheDocument();
  });

  it('Verifica se possui um form de ordenação', () => {
    const inputColumn = screen.getByTestId('column-sort');

    expect(screen.getByRole('radio', { name: /ascendente/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /descendente/i })).toBeInTheDocument();
    expect(inputColumn).toBeInTheDocument();
    expect(inputColumn.options).toHaveLength(5);
    expect(screen.getByRole('button', { name: /ordenar/i })).toBeInTheDocument();
  });

  it('Verifica se a tabela possuir um cabeçalho', () => {
    expect(screen.getByText(/^Name$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Rotation Period$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Orbital Period$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Diameter$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Climate$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Gravity$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Terrain$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Surface Water$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Population$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Films$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Created$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^Edited$/i, { selector: 'th' })).toBeInTheDocument();
    expect(screen.getByText(/^URL$/i, { selector: 'th' })).toBeInTheDocument();
  });

  it('Verifica se os planetas são renderizados na tabela', async () => {
    expect(await screen.findByText(/^Tatooine$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Alderaan$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Yavin IV$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Hoth$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Dagobah$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Bespin$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Endor$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Naboo$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Coruscant$/i, { selector: 'td' })).toBeInTheDocument();
    expect(await screen.findByText(/^Kamino$/i, { selector: 'td' })).toBeInTheDocument();
  });
});
