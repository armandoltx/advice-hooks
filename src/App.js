import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function Frase({frase}) {
  return(
    <div>
      <h1>{frase.advice}</h1>
    </div>
  );
}

function App() {

  // state
  const [frase, obtenerFrase] = useState({});
  // console.log(frase);

  const consultarApi = async () => {
    const url = 'https://api.adviceslip.com/advice';
    const resultado = await axios(url);

    // console.log("resultado ", resultado.data.slip.advice); para ir comprobando el resultado.
     obtenerFrase(resultado.data.slip);
  }

  useEffect(
    () => {
      consultarApi()
    },[]
  )

  // console.log("frase ", frase);

  return (
    <div className="App">
      <Frase frase={frase} />
      <button onClick={consultarApi}>Nueva Cita</button>
    </div>
  );
}

export default App;
