function criarTarefa() {
  const inputTarefa = document.getElementById("tarefa");
  const diasSemanas = document.getElementById("dias-semana").value;
  const acrescentar = document.getElementById(diasSemanas);

  if (inputTarefa.value === "") {
    alert("Digite uma tarefa!!!!!");
  } else {
    acrescentar.innerHTML += `<li>${inputTarefa.value}</li>`;
    inputTarefa.value = "";
  }
}
