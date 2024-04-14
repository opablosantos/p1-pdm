function TarefaLista({tarefas}) {
  return (
    <div class="container">
      <div class="p-5 justify-content-center row border bg-warning rounded-5"> 
        {tarefas.map((tarefa, index) => (
          <div key={index} className="text-center border border-dark mb-2 p-3 col-12 col-md-11 bg-white rounded-2">
            {tarefa}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TarefaLista;