function TarefaEntrada() {
  return (
    <form>
        <div class="mb-3">
            <input type="text" class="form-control text-center p-3 rounded-2" id="tarefa" placeholder="Digite a descrição de uma nova tarefa"/>
        </div>
        <div class="row p-3">
            <button type="button" class="btn btn-primary btn-lg">OK</button>
        </div>
    </form>
  );
}

export default TarefaEntrada;