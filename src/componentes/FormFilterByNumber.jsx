import React, { useState, useContext } from 'react';
import tableContext from '../context/tableContext';

export default function FormFilterByNumber() {
  const { setFilterByNumericValues } = useContext(tableContext);
  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

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
          <option value="population">Population</option>
          <option value="orbital_period">Orbital period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation period</option>
          <option value="surface_water">Surface water</option>
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
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
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
