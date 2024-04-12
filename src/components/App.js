import 'bootstrap/dist/css/bootstrap.min.css'
import TarefaLista from './TarefaLista';

function App() {
  return (
    <div class="border p-4 m-6 container">
      
    <div class="text-center border p-3 rounded-2">
      Digite a descrição de uma nova tarefa
    </div>
    <div class="row p-3">
      <button type="button" class="btn btn-primary btn-lg">ok</button>
    </div>
    <TarefaLista/>
  </div>
  );
}

export default App;



//import React from 'react';