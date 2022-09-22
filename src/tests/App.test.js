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

  it('Verifica se possui um input de texto para filtrar por nome', async () => {
    expect(await screen.findByTestId('name-filter')).toBeInTheDocument();
  })

  it('Verifica se possui um form de filtragem Numerica', () => {

  });
});
