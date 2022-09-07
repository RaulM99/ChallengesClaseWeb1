import { useState } from "react";

const title = "LLAMADAS TELEFONICAS"

export const Punto2 = () =>{

	const [minutos, setMinutos] = useState("")
	const [valorconvertido, setValorConvertido] = useState("")

		const onInputChange = (event) => {
			setMinutos(event.target.value)}

		const handleAdd = (event) => {
			event.preventDefault();
			setMinutos('')

			if(minutos < 4 && minutos >0 ){
				const valorMinutos= minutos * 100
				setValorConvertido(`Valor a Pagar: ${valorMinutos}`)
			} else {
				const valorMaxMin= 300 + ((minutos - 3)*50)
				setValorConvertido(`Valor a Pagar: ${valorMaxMin}`)
			}

		}


	return(
		<>
			<h1>{title}</h1>
			<p>Minutos de la llamada</p>
			<input
				type="number"
				value={minutos}
				onChange={(event) => onInputChange(event)}
			/>
			<button onClick = {(event) => handleAdd(event)}>AGREGAR</button>
			<div>
				<h3>Duración de la Llamada: {minutos} Minutos.</h3>
				<p>{valorconvertido}</p>
			</div>

			</>

		)
}