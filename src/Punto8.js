import { useState } from "react";

export const Punto8 = () => {

  const [salaries, setSalaries] = useState(['']);
  const [salary, setSalary] = useState('');
  let [newSalary, setNewSalary] = useState(['']);
  const [newSalaries, setNewSalaries] = useState(['']);


  const onAddSalary = () => {
    if (salary !== '') {
      setSalaries(list1 => [...list1, salary])
      newSalary = salary * 1.08
      setNewSalaries(list2 => [...list2, newSalary])
      setSalary('')
      setNewSalary('')
    }
  }

  const onSetSalary = (event) => {
    setSalary(event.target.value.replace(/\D/g, ''))
  }

  const onShowNewSalaries = () => {
    if (newSalaries.length === 10) {
      document.querySelector('#result').textContent = newSalaries.join(', ');
    }
    else {
      alert("¡Error!\nSe necesitan 10 salarios.");
    }
  }

  const deleteLastSalary = () => {
    salaries.pop()
    newSalaries.pop()
  }


  return (

    <>
      <h1>Agregar de salarios</h1><br /><br />

      <input type="text" value={salary}
        onChange={(event) => onSetSalary(event)} />
      <button onClick={() => onAddSalary()}> Agregar salario </button>
      <button onClick={() => onShowNewSalaries()}> Mostrar salarios nuevos </button>
      <button onClick={() => deleteLastSalary()}> Borrar último salario </button>

      <ol>
        {
          salaries.map(
            (salary, key) => {
              return <li key={key}> {salary}</li>
            }
          )
        }
      </ol>
      <div>Resultado</div>
      <div id="result"></div>
    </>
  )

}