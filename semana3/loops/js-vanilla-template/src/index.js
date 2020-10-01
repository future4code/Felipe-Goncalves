// ----EXERCICIO 1------
// Esta realizando uma condição em for onde a variavel  valor cada vez que passa pelo loop sera somado 1 enquanto for menos que 5, quando igualar ou for maior que 5 o loop para.
// O resultado será 10

// ------EXERCICIO 2------

// a. Sera impresso os valores da lista do array com numeros maiores que 18.

// b. Sim o for ...of ... é suficiente para acessar todos os elemnetos da array.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   console.log(numero);
// }

// ------DESAFIO 1------

// irá imprimir um 0 a mais para cada linha que o programa ler

// ------EXERCICIO 3--------

// ------A

// const arrayOriginal = [0, 5, 10, 15, 20, 25, 30, 35]

// for (let numero of arrayOriginal){
//     console.log(numero)
// }

// ------B

// const arrayOriginal = [0, 5, 10, 15, 20, 25, 30, 35];

// for (let numero of arrayOriginal) {

//     if(numero >= 10 ){
//         numero = numero / 10
//       console.log(numero)
//     }
// }

// -------C
// const arrayOriginal = [0, 5, 10, 15, 20, 25, 30, 35];
// let arrayPares = [];

// for (let numero of arrayOriginal) {
//   if (numero % 2 === 0) {
//     arrayPares.push(numero);
//   }
// }
// console.log(arrayPares);

//  -------D

// const arrayOriginal = [0, 5, 10, 15, 20, 25, 30, 35];
// let string = [];

//   for (let i = 0; i < arrayOriginal.length; i++) {
//     string.push("O elemento do index " + [i] + " é " + arrayOriginal[i])
//   }
//   console.log(string)

//--------E

// const arrayOriginal = [0, 5, 10, 15, 20, 25, 30, 35];

// let menorValor = arrayOriginal[0];
// let maiorValor = arrayOriginal[0];

// for (let i = 0; i < arrayOriginal.length; i++) {
//   maiorValor = arrayOriginal[i];
// }

// for (let i = 0; i > arrayOriginal.length; i++) {
//   menorValor = arrayOriginal[i];
// }

// console.log(maiorValor);
// console.log(menorValor);
