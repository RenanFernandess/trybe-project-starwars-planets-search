import React, { useContext } from 'react';
import propTypes from 'prop-types';
import tableContext from '../context/tableContext';

export default function FilterCard({ filter: { column, comparison, value } }) {
  const { setFilterByNumericValues } = useContext(tableContext);

  const removeFilter = () => {
    setFilterByNumericValues((preveiusFiltersNumerics) => (
      preveiusFiltersNumerics.filter(({ column: col }) => col !== column)
    ));
  };

  return (
    <div data-testid="filter">
      <p>{`${column} ${comparison} ${value}`}</p>
      <button
        type="button"
        onClick={ removeFilter }
      >
        X
      </button>
    </div>
  );
}

FilterCard.propTypes = {
  filter: propTypes.objectOf(propTypes.string),
}.isRequired;
