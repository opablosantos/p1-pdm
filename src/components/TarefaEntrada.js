import React, { useState } from 'react';
import TarefaLista from './TarefaLista';

function TarefaEntrada() {
  const [inputValue, setInputValue] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTarefas([...tarefas, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <input type="text" value={inputValue} onChange={handleInputChange} class="form-control text-center p-3 rounded-2" id="tarefa" placeholder="Digite a descrição de uma nova tarefa"/>
        </div>
        <div class="row p-3">
              <button type="submit" class="btn btn-primary btn-lg">OK</button>
          </div>
      </form>
      <TarefaLista tarefas={tarefas}/>
    </div>
  );
}

export default TarefaEntrada;