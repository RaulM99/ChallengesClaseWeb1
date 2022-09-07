import { useState } from "react";

export const Punto6 = () => {

	const [numero, setNumero] = useState('')
	var impares = "Números: "


	const onInputChange = (event) => {
		setNumero(event.target.value.replace(/\D/g, ''))
	}

	const handleAdd = (event) => {
		event.preventDefault();
		setNumero('')
		for (var i = 0; i < numero; i++) {
			if (i % 2 !== 0) {
				impares = impares + i + ", ";
			}

		}
		document.getElementById('listafinal').innerHTML = impares;
	}


	return (
		<>
			<h1>Números impares que son menores al que escojas</h1>
			<input type="text" placeholder="Numero de Referencia" value={numero} onChange={(event) => onInputChange(event)} />
			<button onClick={(event) => handleAdd(event)}>Ver números</button>
			<h3>Los números impares son:</h3>
			<div id="listafinal"></div>
		</>

	)
}