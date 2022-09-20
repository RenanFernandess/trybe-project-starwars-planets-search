import React, { useEffect, useContext } from 'react';
import tableContext from './context/tableContext';
import Table from './componentes/Table';
import Filter from './componentes/Filter';

const URL = 'https://swapi.dev/api/planets';

function App() {
  const { setPlanets } = useContext(tableContext);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(({ results }) => setPlanets(results));
  }, [setPlanets]);

  return (
    <main>
      <Filter />
      <Table />
    </main>
  );
}

export default App;
