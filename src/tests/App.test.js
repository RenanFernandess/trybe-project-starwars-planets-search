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
});
