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
  const [imagen, obtenerImagen] = useState('');

  const consultarApiCita = async () => {
    const url = 'https://api.adviceslip.com/advice';
    const resultado = await axios(url);

    // console.log("resultado ", resultado.data.slip.advice); para ir comprobando el resultado.
    obtenerCita(resultado.data.slip.advice);
  }

  const consultarApiImagen = async () => {
    const url = 'https://source.unsplash.com/random/900×900/?coffee';

    // query con fetch api
    fetch(url)
      .then(respuesta => {
        // console.log("respuesta dentro de fetch ", fetch);
        return respuesta;
      })
      .then(foto => {
        // console.log("imagen en fetch ", foto.url);
        obtenerImagen(foto.url);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(
    () => {
      consultarApiCita()
      consultarApiImagen()
    },[]
  )

  const change = () => {
    consultarApiCita();
    consultarApiImagen();
  }

  // css inline
  let sectionStyle = {
    backgroundImage: `url(${imagen})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

  }

  // console.log("frase ", frase);
  // console.log("imagen ", imagen);

  return (
    <div className="wrapper" style={sectionStyle}>
      <div className="contenedor">
        <Frase frase={cita} />
        <button onClick={change}>Nueva Cita</button>
      </div>
    </div>
  );
}

export default App;
