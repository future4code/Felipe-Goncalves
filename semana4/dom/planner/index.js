let contador = 0;

function criarTarefa() {
  const inputTarefa = document.getElementById("tarefa");
  const diasSemanas = document.getElementById("dias-semana").value;
  const acrescentar = document.getElementById(diasSemanas);

  contador = contador++;
  let id = `tarefa-${contador}`
  
  if (inputTarefa.value === "") {
    alert("Digite uma tarefa!!!!!");
  } else {
    acrescentar.innerHTML += `<li id=${id} onclick="riscaTarefa(id)" >${inputTarefa.value}</li>`;
    inputTarefa.value = "";
  }
}

function riscaTarefa(id) {
  document.getElementById(id).style.textDecoration = "line-through";
}
