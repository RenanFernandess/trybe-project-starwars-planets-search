import React from 'react';

export default function SortPlanets() {
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
            id="input-desc"
            data-testid="column-sort-input-desc"
          />
          descendente
        </label>
      </div>
      <button
        type="button"
        testid="column-sort-button"
      >
        ordenar
      </button>
    </form>
  );
}
