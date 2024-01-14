import 'bootstrap/dist/css/bootstrap.min.css'
import Saludo from './components/Saludo'
import React, { useState } from 'react';

function App() {
  const [msj, setMsj] = useState('');

  const cambiaMensaje = () => {
    setMsj('(from changed state)');
  };

  return (
    <div className="App">
      <Saludo msj={msj} />
      <button onClick={cambiaMensaje}>Click me</button>
    </div>
  );
}

export default App;
