// -----INTERPRETAÇÃO DE CODIGO
// -----1 a.
// A função retornara os valores da variavel * 5:
// console.log(minhaFuncao(2)) seria o mesmo que 2*5 = 10 e console.log(minhaFuncao(10)) seria o mesmo que 10*5 = 50

// ------1 b.
// Não aconteceria nada, pois o resultade do return não será impresso sem estar armazenada em uma variavel.

//  -------2 a.
// Sera impresso apenas os dois primeiros indices da Array, pois na condição feira na função o indice começa em [0] e termina em menor que 2

// -------2 b.
// Será impresso os dois indices da Array: "Amanda", "Caio".

// ----- 3
// a função metodos esta recebendo uma array.
// Declara uma Array vazia.
// Faz um loop para cada elemento da Array.
// COm uma condição do elemento dividido por 2, onde o resto da divisão for igual a 0, ele sera multipliado por ele mesmo dará um push.
// restonrando a Array com elementos ao quadrado.

// const elevaNumeroParesAoQuadrado = (numeros) => {

//   let resultadoNumeroAoQuadrado = [];

//   for (let elemento of numeros) {
//     if (elementos % 2 === 0) {
//       resultadoNumeroAoQuadrado.push(elemento * elemento);
//     }
//   }
//   return resultadoNumeroAoQuadrado;
// };

// ------4 a. ESCRITA DE CODIGO

// let nome = () => {
//   console.log(
//     "Eu sou Felipe, tenho 30 anos, moro em Caraguatatuba e sou estudante da Labenu."
//   );
// };
// nome();

// -------b

const coletaDeDados = (nome, idade, endereco, estudo) => {
  nome = "Felipe";
  idade = 30;
  endereco = "Caraguatatuba";

  const concat = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e `;

  if (estudo === "sim") {
    console.log(concat + "Sou estudande");
  } else {
    console.log(concat + "não sou estudande");
  }
};

let todosOsDados = coletaDeDados("sim");
