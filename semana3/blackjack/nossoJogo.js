console.log("Bem-Vindo ao jogo de Blackjack");
let bemVindo = confirm("Quer iniciar uma nova partida?");

let carta1Usuario = comprarCarta();
let carta2Usuario = comprarCarta();

let carta1Cpu = comprarCarta();
let carta2Cpu = comprarCarta();

let somaUsuario = 0;
let somaCpu = 0;

if (bemVindo) {
  somaUsuario = carta1Usuario.valor + carta2Usuario.valor;

  somaCpu = carta1Cpu.valor + carta2Cpu.valor;
  console.log(
    `Usuário - cartas:  ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${somaUsuario}`
  );

  console.log(
    `Computador - cartas:  ${carta1Cpu.texto} ${carta2Cpu.texto} - pontuação ${somaCpu}`
  );

  if (somaCpu === somaUsuario) {
    console.log("Empate !!!!!");
  } else if (somaCpu > somaUsuario) {
    console.log("Computador Ganhou!");
  } else {
    console.log("Usuario Ganhou!");
  }
} else {
  console.log("O jogo acabou :(  !!");
}

//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  *
//  *
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  *
//  *
//  *
//  */
