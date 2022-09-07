import {useState} from "react";

const title = "NOMBRE Y HORA"

export const Punto3 = () =>{

    const [nombre, setNombre] = useState("")
    const [hora, setHora] = useState("")
    const [saludo, setSaludo] = useState("")

    const onInputChange1 = (event) => {
        setNombre(event.target.value)
    }

    const handleAdd1 = (event) => {
        event.preventDefault();
        setNombre(`${nombre}`)
    }

    const onInputChange = (event) => {
        setHora(event.target.value)
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setHora('')

        if(hora < 11.59 && hora >0 ){
            const saludoSegunHora= "¡Buenos días, "
            setSaludo(`Saludo: ${saludoSegunHora}` + `${nombre}!`)
        } else if(hora < 18.59 && hora >12){
            const saludoSegunHora= "¡Buenas tardes, "
            setSaludo(`Saludo: ${saludoSegunHora}` + `${nombre}!`)
        } else if(hora < 23.59 && hora >7){
            const saludoSegunHora= "¡Buenas noches, "
            setSaludo(`Saludo: ${saludoSegunHora}` + `${nombre}!`)
        }
    }

    return(
        <>
        <h1>{title}</h1>
			<h3>Nombre</h3>
			<input
				type="letra"
				value={nombre}
				onChange={(event) => onInputChange1(event)}
			/>
			<div>
				<p>Nombre: {nombre}</p>
				<p></p>
			</div>

            <h1></h1>
			<h3>Hora</h3>
			<input
				type="number"
				value={hora}
				onChange={(event) => onInputChange(event)}
			/>
			<button onClick = {(event) => handleAdd(event)}>SALUDAR</button>
			<div>
				<p>Hora: {hora}</p>
				<h2>{saludo}</h2>
			</div>
        </>
    )
}