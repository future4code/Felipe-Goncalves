// 1. faz uma divisão e a partir por 2 ele iguala o resultado a 0. Caso seja par ( ===0 ) imprime a mensagem de "Passou no teste". Caso o resto da divisão 1 ( numero impar) imprime a mensagem "Não passou no teste".

// 2. a.  uma forma  simplificada de fazer a sintaxe de uma condição.

//     b. vai retorna case  preco = 2,25

// c. a mensagem seria preco = 5.

// 3. a. está tranformando uma string em numero.

// b. no primeiro caso retornara a mensagem de console.log("Esse número passou no testo"). Caso seja -10 não retornará nada por só estamos analisando uma unica condição.

// c. não havera um acesso pois há uma solicitação de escopo global para o escopo local.

// // 4.
// let idade = Number(prompt("Qual sua idade?"))

// if (idade >= 18){
//     console.log("Vc pode dirigir")
// }else{
//     console.log("Vc não pode dirigir")
// }

// // 5
// let horario = prompt("Digite a letra para o periodo vc estuda M(manhã), V(vespertino), N(noite)").toLowerCase()

// if(horario === "m"){
//     console.log("Bom dia!")

// } else if (horario === "v"){
//     console.log("Boa tarde!")

// }else{
//     console.log("Boa noite!")
// }

// // 6
// switch (horario){
//     case "m":
//         console.log("Bom dia!")
//     break

//     case "v":
//     console.log("Boa tarde!")
//     break

//     case "n":
//     console.log("Boa noite!")
//     break

// }

// // 7
// let genero = prompt("Qual genero de filmes vc assistirá?").toLowerCase()
// let valorIgresso =  Number(prompt("Qual valor do seu ingresso"))

// if (genero === "fantasia" && valorIgresso < 15 ){
//     console.log("Bom filme!")

// }else {
//     console.log("Escolha outro filme!")
// }

// Desafio

// let genero = prompt("Qual genero de filmes vc assistirá?").toLowerCase()
// let valorIgresso =  Number(prompt("Qual valor do seu ingresso"))

// if (genero === "fantasia" && valorIgresso < 15 ){
//     console.log("Bom filme!")
//     let slack = prompt("que snack vc deseja ( pipoca, chocolate ou doces)?").toLowerCase()
// console.log("Bom filme!" + "Com " + slack)

// }else {
//     console.log("Escolha outro filme!")
// }

// DESAFIO 2

let nome = prompt("Nome completo").toLowerCase();
let tipoDeJogo = prompt(
  "Qual tipo de jogo IN para internacional ou DO para domestico"
).toLowerCase();
let etapaDeJogo = prompt(
  "Qual a etapa de jogo SF semi-final, DT terceiro lugar e FI final"
);
let categoria = Number(prompt("Escolha a categoria de 1 a 4"));
let quantidadeDeIngresso = Number(prompt("Quantidade de ingresso"));

let valorEmReal = 0;
let valorEmDolar = valorEmReal / 4.1;

if (tipoDeJogo === "in") {
  tipoDeJogo = "internacional";
} else if (tipoDeJogo === "do") {
  tipoDeJogo = "domestico";
}

if (
  (etapaDeJogo === "sf" && categoria === 1) ||
  (etapaDeJogo === "fi" && categoria === 2)
) {
  valorEmReal = 1320.0;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (
  (etapaDeJogo === "sf" && categoria === 2) ||
  (etapaDeJogo === "fi" && categoria === 3)
) {
  valorEmReal = 880.0;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (
  (etapaDeJogo === "dt" && categoria === 3) ||
  (etapaDeJogo === "fi" && categoria === 4)
) {
  valorEmReal = 330.0;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (etapaDeJogo === "fi" && categoria === 1) {
  valorEmReal = 1980.0;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (etapaDeJogo === "dt" && categoria === 1) {
  (valorEmReal = 660), 00;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (etapaDeJogo === "dt" && categoria === 2) {
  (valorEmReal = 440), 00;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (etapaDeJogo === "sf" && categoria === 3) {
  (valorEmReal = 550), 00;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (etapaDeJogo === "sf" && categoria === 4) {
  (valorEmReal = 220), 00;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

if (etapaDeJogo === "dt" && categoria === 4) {
  (valorEmReal = 170), 00;
  valorEmDolar = valorEmReal / 4;

  if (etapaDeJogo === "sf") {
    etapaDeJogo = "semi-final";
  } else if (etapaDeJogo === "dt") {
    etapaDeJogo = "terceiro lugar";
  } else if (etapaDeJogo === "fi") {
    etapaDeJogo = "final";
  } else {
    console.log("Não existe jogo");
  }
}

console.log(`---Dados da Compra---
Nome do cliente: ${nome}
Tipo de jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDeJogo}
Categoria: ${categoria}
Quantidade de Ingresso: ${quantidadeDeIngresso} ingressos
----Valores----`);

if (tipoDeJogo === "domestico") {
  console.log(`Valor do ingresso R$ ${valorEmReal}`);
  console.log(` Valor Total: R$ ${valorEmReal * quantidadeDeIngresso}`);
} else {
  console.log(`Valor do ingresso U$ ${valorEmDolar}`);
  console.log(` Valor Total: U$ ${valorEmDolar * quantidadeDeIngresso}`);
}
