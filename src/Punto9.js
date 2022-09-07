import { useState } from "react";

export const Punto9 = () => {


    const [row, setRow] = useState('');
    const [col, setCol] = useState('');


    const onSetRow = (event) => {
        setRow(event.target.value.replace(/\D/g, ''))
    }

    const onSetCol = (event) => {
        setCol(event.target.value.replace(/\D/g, ''))
    }

    const tableCreate = (row, col) => {

        let body = document.body;
        let tbl = document.createElement('table');
        tbl.style.width = '250px';
        tbl.style.border = '2px solid black';

        for (let i = 0; i < row; i++) {
            let tr = tbl.insertRow();
            for (let j = 0; j < col; j++) {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`${i},${j}`));
                td.style.border = '2px solid black';
            }
        }
        body.appendChild(tbl);

    }


    return (

        <>
            <h1>Filas y columnas para tu tabla</h1><br /><br />
            <span> Número de filas </span><br />
            <input type="text" value={row} onChange={(event) => onSetRow(event)} />
            <br />
            <span> Número de columnas</span><br />
            <input type="text" value={col} onChange={(event) => onSetCol(event)} />
            <br /><br />
            <button onClick={() => tableCreate(row, col)}> Crear tabla </button>
            <br /><br />
        </>
    )

}