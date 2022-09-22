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

    const kamino = screen.getByRole('cell', { name: /^Kamino$/i });

    userEvent.type(screen.getByTestId('name-filter'), 'Naboo');

    expect(screen.getByRole('cell', { name: /^Naboo$/i })).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(2);
    expect(kamino).not.toBeInTheDocument();
  });

  it('Verifica se a filtragem de "maior que" funciona corretamente', async () => {
    await waitFor(() => expect(screen.getByText(/^Naboo$/i, { selector: 'td' })).toBeInTheDocument());

    const naboo = screen.getByRole('cell', { name: /^Naboo$/i });

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'rotation_period');
    userEvent.type(screen.getByTestId('value-filter'), '26');
    userEvent.click(screen.getByRole('button', { name: /Filtrar/i }));

    expect(screen.getByRole('cell', { name: /^Kamino$/i })).toBeInTheDocument();
    expect(naboo).not.toBeInTheDocument();
  });

  it('Verifica se a filtragem de "menor que" funciona corretamente', async () => {
    await waitFor(() => expect(screen.getByText(/^Naboo$/i, { selector: 'td' })).toBeInTheDocument());

    const naboo = screen.getByRole('cell', { name: /^Naboo$/i });

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'orbital_period');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que');
    userEvent.type(screen.getByTestId('value-filter'), '312');
    userEvent.click(screen.getByRole('button', { name: /Filtrar/i }));

    expect(screen.getByRole('cell', { name: /^Tatooine$/i })).toBeInTheDocument();
    expect(naboo).not.toBeInTheDocument();
  });

  it('Verifica se a filtragem de "igual a" funciona corretamente', async () => {
    await waitFor(() => expect(screen.getByText(/^Naboo$/i, { selector: 'td' })).toBeInTheDocument());

    const naboo = screen.getByRole('cell', { name: /^Naboo$/i });

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a');
    userEvent.type(screen.getByTestId('value-filter'), '200000');
    userEvent.click(screen.getByRole('button', { name: /Filtrar/i }));

    expect(screen.getByRole('cell', { name: /^Tatooine$/i })).toBeInTheDocument();
    expect(naboo).not.toBeInTheDocument();
  });
}); 