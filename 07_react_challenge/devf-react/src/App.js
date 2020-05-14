import React from 'react';
import Title from './components/title';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div className="">
      <div>
        <Title />
      </div>

      <div>
        <Card
          titulo={'Pelota'}
          descripcion={'Pelota'}
          trad={'Ball'}
        />
        <Card
          titulo={'Perro'}
          descripcion={'Perro'}
          trad={'Dog'}
        />
        <Card
          titulo={'Gato'}
          descripcion={'Gato'}
          trad={'Cat'}
        />
      </div>

    </div>
  );
}

export default App;
