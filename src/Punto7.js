import { useState } from "react";

export const Punto7 = () => {

  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  let [position, setPosition] = useState('');

  const onSetPosition = (event) => {
    setPosition(event.target.value.replace(/\D/g, ''))
  }

  const onAddPosition = () => {


    if (array[position] !== undefined) {
      document.querySelector('#result').textContent = array[array.length - 1];
    }
    else {
      alert("¡Error!\nDebe ser un número entre 0 y 9.");
    }

  }


  return (

    <>
      <h1>Números aleatorios</h1>
      <input type="text" value={position}
        onChange={(event) => onSetPosition(event)} />
      <button onClick={() => onAddPosition()}> Agregar y mostrar </button>
      <br /><br />
      <div>El resultado aparecerá a continuación</div>
      <div id="result"></div>
    </>
  )

}