import React, { useEffect, useContext } from 'react';
import tableContext from './context/tableContext';
import Table from './componentes/Table';
import Filter from './componentes/Filter';
import Provider from './context/Provider';

const URL = 'https://swapi.dev/api/planets';

function App() {
  const { setPlanets } = useContext(tableContext);

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
    <Provider>
      <main>
        <Filter />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
