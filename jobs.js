let choice = 0;
let vagasQnt = 0;
let vagasList = [];
let vagaSearch = "";
let vagaFilter = [];
let candidate = "";
let vagaIndex = "";
let vagaDelete = 0;
let vagasIndexCount = 0;

const alertCandidate = function (maindata) {
  return "\nCandidato: " + maindata
}

const alertVaga = function (i){
  alert("Indíce: " + vagasList[i].indice + "\n" + vagasList[i].nome + "\nDescrição: " + vagasList[i].descricao + "\nData Limite: " + vagasList[i].dataLimite + "\nCandidatos Inscritos: " + vagasList[i].quantidadeDeCandidatos)
}

const vaga = {
  indice: "indice",
  nome: "nome",
  descricao: "descricao",
  quantidadeDeCandidatos: "quantidadeDeCandidatos",
  dataLimite: "dataLimite",
  nomeDosCandidatos: "nomeDosCandidatos",
}

do {
  choice = prompt("1 - Listar Vagas\n2 - Criar uma nova vaga\n3 - Visualizar um vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair")
  switch(choice) {
    case "1":
    if (vagasList.length == 0){
      alert("Não temos vagas cadastradas.")
    } else {
    for (let i = 0; i < vagasList.length; i++){
      alertVaga(i);
    }
  }
    break
    case "2":
    vagasList.push({})
    vagasList[vagasQnt].indice = vagasIndexCount
    vagasList[vagasQnt].nome = prompt("Qual o nome para a vaga?")
    vagasList[vagasQnt].dataLimite = prompt("Qual a data limite para a vaga?")
    vagasList[vagasQnt].descricao = prompt("Qual a descrição para a vaga?")
    vagasList[vagasQnt].quantidadeDeCandidatos = 0;
    vagasList[vagasQnt].nomeDosCandidatos = "Nenhum candidato inscrito."
    vagasQnt += 1;
    vagasIndexCount += 1;  
    break
    case "3":
    vagaSearch = parseFloat(prompt("Qual o código da vaga que deseja buscar?"))
    vagaFilter = vagasList.filter(function (vagasTodas){
      return vagasTodas.indice === vagaSearch
    })
    if (vagaFilter.length === 0){
      alert("A busca pelo índice " + vagaSearch +" não teve resultado")
    } else {
      alert("A busca pelo índice " + vagaSearch + " resultou na vaga de nome = " + vagaFilter[0].nome + "\nDescrição: " + vagaFilter[0].descricao + "\nData limite: " + vagaFilter[0].dataLimite + ".\nEssa vaga teve os seguintes inscritos:\n" + vagaFilter[0].nomeDosCandidatos)
    }
    break
    case "4":
    vagaSearch = parseFloat(prompt("Qual o índice da vaga que quer inscrever um candidato?"))
    vagaFilter = vagasList.filter(function(vagasTodas){
      return vagasTodas.indice === vagaSearch
    })
    if (vagaFilter.length === 0) {
      alert("A busca pelo índice " + vagaSearch +" não teve resultado")
    } else {
    candidate = prompt("Qual o nome do candidato que quer adicionar na vaga?")
    if (vagaFilter[0].nomeDosCandidatos === "Nenhum candidato inscrito."){
      vagaFilter[0].nomeDosCandidatos = "- " + candidate;
      vagaFilter[0].quantidadeDeCandidatos += 1;
    } else {
      vagaFilter[0].nomeDosCandidatos += "\n- " + candidate;
      vagaFilter[0].quantidadeDeCandidatos += 1;
    }
    }
    break
    case "5":
    vagaSearch = parseFloat(prompt("Qual o índice da vaga que quer deletar?"))
    vagaIndex = vagasList.findIndex(function(element){
      if (element.indice != vagaSearch) {
        return false;
      } else {
        return true;
      }
    })
    if (vagaIndex === -1){
      alert("Vaga não encontrada")
    } else {
     vagaDelete = confirm("Tem certeza que deseja deletar a vaga " + vagasList[vagaIndex].nome + " de indíce " + vagasList[vagaIndex].indice + "?")
     if (vagaDelete === true){
      vagasList.splice(vagaIndex,1)
      vagasQnt -= 1; 
     }
    }
    break
    case "6":
    alert("Finalizando...")
    break
  }
} while (choice != 6)