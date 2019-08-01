import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function Frase({frase}) {
  return(
    <div>
      <h1>{frase}</h1>
    </div>
  );
}

function App() {

  // state
  const [cita, obtenercita] = useState('');
  // console.log(frase);

  const consultarApiCita = async () => {
    const url = 'https://api.adviceslip.com/advice';
    const resultado = await axios(url);

    // console.log("resultado ", resultado.data.slip.advice); para ir comprobando el resultado.
    obtenercita(resultado.data.slip.advice);
  }

  useEffect(
    () => {
      consultarApiCita()
    },[]
  )

  // console.log("frase ", frase);

  return (
    <div className="App">
      <Frase frase={cita} />
      <button onClick={consultarApiCita}>Nueva Cita</button>
    </div>
  );
}

export default App;
