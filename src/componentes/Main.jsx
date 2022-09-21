import React, { useEffect, useContext } from 'react';
import tableContext from '../context/tableContext';
import Table from './Table';
import Filter from './Filter';

const URL = 'https://swapi.dev/api/planets';

export default function Main() {
  const {
    setPlanets,
    filterByNumericValues,
    setFilterByNumericValues,
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
      <section>
        <Filter />
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => { setFilterByNumericValues([]); } }
        >
          Remover todas filtragens
        </button>
      </section>
      <br />
      <div>
        {
          filterByNumericValues.map(({ column, comparison, value }, index) => (
            <p key={ index }>{`${column} ${comparison} ${value}`}</p>))
        }
      </div>
      <br />
      <Table />
    </main>
  );
}
