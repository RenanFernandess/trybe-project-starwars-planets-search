import React, { useState } from 'react';
import propTypes from 'prop-types';
import tableContext from './tableContext';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const contextType = {
    filterByNumericValues,
    setFilterByNumericValues,
    filterByName,
    setFilterByName,
    planets,
    setPlanets,
  };

  return (
    <tableContext.Provider value={ contextType }>
      { children }
    </tableContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.arrayOf({}),
}.isRequired;
