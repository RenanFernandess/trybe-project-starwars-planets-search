import React, { useState } from 'react';
import propTypes from 'prop-types';
import tableContext from './tableContext';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const contextType = {
    filterByName,
    filterByNumericValues,
    order,
    planets,
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
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
