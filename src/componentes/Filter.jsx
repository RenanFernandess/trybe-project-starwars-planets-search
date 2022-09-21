import React, { useContext } from 'react';
import tableContext from '../context/tableContext';
import FormFilterByNumber from './FormFilterByNumber';
import FormSort from './FormSort';

export default function Filter() {
  const {
    setFilterByName,
    filterByName: { name },
    setFilterByNumericValues,
  } = useContext(tableContext);

  const onInputChange = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  return (
    <section>
      <div>
        <label htmlFor="filter-name">
          <input
            data-testid="name-filter"
            type="text"
            id="filter-name"
            name="name"
            value={ name }
            onInput={ onInputChange }
          />
        </label>
      </div>
      <FormFilterByNumber />
      <FormSort />
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => { setFilterByNumericValues([]); } }
      >
        Remover todas filtragens
      </button>
    </section>
  );
}
