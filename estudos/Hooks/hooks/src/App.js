import React, { useState, useEffect } from "react";

function App(){

  const [tarefas, setTarefas] = useState([
    'Pagar facul',
    'Estudar trampo'
  ])

  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])
  
  function adicionaTarefa(){
    setTarefas([...tarefas, input])
  }

  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={adicionaTarefa}>Adicionar</button>
    </div>
  );
}


export default App;
