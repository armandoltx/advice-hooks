import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase({frase}) {
  return(
    <div className="frase">
      <h1>{frase}</h1>
    </div>
  );
}

function App() {

  // state
  const [cita, obtenerCita] = useState('');
  // console.log(frase);

  const consultarApiCita = async () => {
    const url = 'https://api.adviceslip.com/advice';
    const resultado = await axios(url);

    // console.log("resultado ", resultado.data.slip.advice); para ir comprobando el resultado.
    obtenerCita(resultado.data.slip.advice);
  }

  useEffect(
    () => {
      consultarApiCita()
    },[]
  )

  // console.log("frase ", frase);

  return (
    <div className="contenedor">
      <Frase frase={cita} />
      <button onClick={consultarApiCita}>Nueva Cita</button>
    </div>
  );
}

export default App;
