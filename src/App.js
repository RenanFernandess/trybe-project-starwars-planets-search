import React from 'react';
import Provider from './context/Provider';
import Main from './componentes/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
