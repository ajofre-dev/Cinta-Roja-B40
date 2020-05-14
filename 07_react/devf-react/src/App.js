import React, { useState } from 'react';

import Holamundo from './components/Holamundo'
import './App.css';

function App() {

        //valor , cambio    = variable con parámetro por default
  const [color, setColor] = useState('red');

  return (
    <div className="App">
        <p>
          Hola devf.
        </p>
        <Holamundo
          contenido={'Primer prop'}
          titulo={'titulo prop'}
          color={color}
        />
        <Holamundo
          contenido={'Segundo prop'}
        />
    </div>
  );
}

export default App;
