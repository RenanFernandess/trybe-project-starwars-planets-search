import React, { useEffect, useContext } from 'react';
import tableContext from '../context/tableContext';
import Table from './Table';
import Filter from './Filter';
import FilterCard from './FilterCard';

const URL = 'https://swapi.dev/api/planets';

export default function Main() {
  const {
    setPlanets,
    filterByNumericValues,
  } = useContext(tableContext);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(({ results }) => {
        const planets = results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setPlanets(planets);
      });
  }, [setPlanets]);

  return (
    <main>
      <Filter />
      <br />
      <div>
        {
          filterByNumericValues.map((filter, index) => (
            <FilterCard key={ index } filter={ filter } />))
        }
      </div>
      <br />
      <Table />
    </main>
  );
}
