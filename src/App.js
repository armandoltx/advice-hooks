import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

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

  console.log("frase ", frase);

  return (
    <div className="App">
      La Frase va aqui
    </div>
  );
}

export default App;
