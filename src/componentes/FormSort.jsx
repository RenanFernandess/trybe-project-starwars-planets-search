import React, { useContext, useState } from 'react';
import tableContext from '../context/tableContext';

export default function SortPlanets() {
  const { order, setOrder } = useContext(tableContext);
  const [state, setState] = useState(order);
  const { column, sort } = state;

  const onInputChange = ({ target: { name, value } }) => {
    setState((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <form>
      <select
        name="column"
        id="column-filter"
        data-testid="column-sort"
        value={ column }
        onChange={ onInputChange }
      >
        <option value="population">Population</option>
        <option value="orbital_period">Orbital period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation period</option>
        <option value="surface_water">Surface water</option>
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
        testid="column-sort-button"
        onClick={ () => { setOrder(state); } }
      >
        ordenar
      </button>
    </form>
  );
}
