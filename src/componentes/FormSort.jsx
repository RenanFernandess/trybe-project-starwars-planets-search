import React, { useContext, useState } from 'react';
import tableContext from '../context/tableContext';

const comparator = {
  ASC(valueA, valueB) {
    const smaller = -1;
    return (Number.isNaN(valueB)) ? smaller : valueA - valueB;
  },
  DESC(valueA, valueB) {
    return (Number.isNaN(valueB)) ? 1 : valueB - valueA;
  },
};

export default function FromSort() {
  const { setPlanets } = useContext(tableContext);
  const [{ column, sort }, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const onInputChange = ({ target: { name, value } }) => {
    setOrder((order) => ({
      ...order,
      [name]: value,
    }));
  };

  const sortPlanets = () => {
    console.log('AQUi');
    setPlanets((planets) => {
      const array = planets.sort(({ [column]: a }, { [column]: b }) => (
        comparator[sort](Number(a), Number(b))));
      return [...array];
    });
  };

  return (
    <form>
      <select
        name="column"
        id="column-sort"
        data-testid="column-sort"
        value={ column }
        onChange={ onInputChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div>
        <label htmlFor="input-asc">
          <input
            type="radio"
            name="sort"
            value="ASC"
            onChange={ onInputChange }
            checked={ sort === 'ASC' }
            id="input-asc"
            data-testid="column-sort-input-asc"
          />
          ascendente
        </label>
        <label htmlFor="input-desc">
          <input
            type="radio"
            name="sort"
            value="DESC"
            checked={ sort === 'DESC' }
            onChange={ onInputChange }
            id="input-desc"
            data-testid="column-sort-input-desc"
          />
          descendente
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ sortPlanets }
      >
        ordenar
      </button>
    </form>
  );
}
