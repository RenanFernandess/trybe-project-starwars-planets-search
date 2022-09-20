import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

export default function Filter() {
  const { setFilterByName, filterByName: { name } } = useContext(tableContext);

  const onInputChange = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  return (
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
  );
}
