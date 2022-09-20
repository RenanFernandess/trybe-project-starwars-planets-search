import React, { useState } from 'react';
import propTypes from 'prop-types';
import planetsContext from './planetsContext';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextType = {
    planets,
    setPlanets,
  };

  return (
    <planetsContext.Provider value={ contextType }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.arrayOf({}),
}.isRequired;
