import React, { useState, useContext, useEffect } from 'react';
import tableContext from '../context/tableContext';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function FormFilterByNumber() {
  const { setFilterByNumericValues, filterByNumericValues } = useContext(tableContext);
  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [columns, setColumns] = useState(COLUMNS);

  useEffect(() => {
    const filteredColumns = COLUMNS
      .filter((value) => !filterByNumericValues.some(({ column }) => column === value));
    setColumns(filteredColumns);
    setFilterValues(({ comparison }) => ({
      column: filteredColumns[0],
      comparison,
      value: 0,
    }));
  }, [filterByNumericValues]);

  const onInputChange = ({ target: { name, value } }) => {
    setFilterValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const setFilter = () => {
    setFilterByNumericValues((previousArray) => [
      ...previousArray,
      filterValues,
    ]);
  };

  const { column, comparison, value } = filterValues;

  return (
    <form>
      <label htmlFor="column-filter">
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ onInputChange }
        >
          {
            columns.map((item) => (<option key={ item } value={ item }>{ item }</option>))
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ onInputChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value"
          id="value-filter"
          data-testid="value-filter"
          value={ value }
          onInput={ onInputChange }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ setFilter }
      >
        Filtrar
      </button>
    </form>
  );
}
