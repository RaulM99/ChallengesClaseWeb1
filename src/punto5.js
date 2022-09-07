import { useState } from 'react'

export const Punto5 = () => {

    const [numerosOrden, setNumerosOrden] = useState(['']);
    const [numerosOrden2, setNumerosOrden2] = useState(['']);
    const [numerosDesorden, setNumerosDesorden] = useState('');

    const onAddNumero = () => {
        if (numerosDesorden !== '') {
            setNumerosOrden(list => [...list, numerosDesorden])
            setNumerosDesorden('')
        }

    }

    const onSetNumerosDesorden = (event) => {
        event.preventDefault();
        setNumerosDesorden(event.target.value.replace(/\D/g, ''))
    }

    const organizarLista = () => {
        setNumerosOrden2(numerosOrden.sort(function (a, b) { return a - b }));
    }

    const borrarUltimoNumero = () => {
        numerosOrden.pop()
        numerosDesorden.pop()
    }


    return (
        <>
            <h1>¡Organizar tu lista de mayor a menor!</h1>
            <input type="text" value={numerosDesorden} onChange={(event) => onSetNumerosDesorden(event)} />
            <button onClick={() => onAddNumero()}> Agregar Número</button>
            <button onClick={() => borrarUltimoNumero()}> Borrar último número </button>
            <button onClick={() => organizarLista()}> Organizar </button>

            <ol>
                {
                    numerosOrden.map(
                        (numerosDesorden, key) => {
                            return <li key={key}>{numerosDesorden}</li>
                        }
                    )
                }
            </ol>

        </>
    )
}
          