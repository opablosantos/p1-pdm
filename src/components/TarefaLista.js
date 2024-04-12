import 'bootstrap/dist/css/bootstrap.min.css'

function TarefaLista() {
  return (
    <div class="container">
      <div class="p-5 justify-content-center row border bg-warning rounded-5"> 
        <div class="text-center border border-dark mb-2 p-3 col-12 col-md-11 bg-white rounded-2">
          Preparar aula de programação
        </div>
        <div class="text-center border border-dark mb-2 p-3 col-12 col-md-11 bg-white rounded-2">
          Fazer feira
        </div>
        <div class="text-center border border-dark mb-2 p-3 col-11 col-md-11 bg-white rounded-2">
          Preparar marmitas
        </div>
      </div>
    </div>
  );
}

export default TarefaLista;
