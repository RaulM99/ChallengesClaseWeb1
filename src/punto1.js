import { useState } from "react";

const title = "TIEMPO DE SEGUNDO A HORAS/MINUTOS/SEGUNDOS"


export const Punto1 = () =>{

	const [segundos, setSegundos] = useState("")
	const [valorconvertido, setValorConvertido] = useState("")
		//const handleReset =() => {setSegundos(value)}
		const onInputChange = (event) => {
			setSegundos(event.target.value)}

		const handleAdd = (event) => {
			event.preventDefault();
			setSegundos('')
			const thoras=Math.round(segundos/3600)
			const tminutos= Math.round((segundos - (thoras*3600))/60)
			const tsegundos= Math.round(segundos -((thoras*3600)+(tminutos*60)))


			setValorConvertido(`${thoras} : ${tminutos} : ${tsegundos}`)

		}


		
	

	return(
		<>
			<h1>{title}</h1>
			<input
				type="number"
				placeholder="Segundos a Convertir"
				value={segundos}
				onChange={(event) => onInputChange(event)}
			/>
			<button onClick = {(event) => handleAdd(event)}>CONVERTIR</button>
			<div>
				<h3>{valorconvertido}</h3>
			</div>

			</>

		)
}