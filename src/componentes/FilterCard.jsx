import React from 'react';
import propTypes from 'prop-types';

export default function FilterCard({ filter: { column, comparison, value } }) {
  return (
    <div data-testid="filter">
      <p>{`${column} ${comparison} ${value}`}</p>
      <button
        type="button"
      >
        X
      </button>
    </div>
  );
}

FilterCard.propTypes = {
  filter: propTypes.objectOf(propTypes.string),
}.isRequired;
