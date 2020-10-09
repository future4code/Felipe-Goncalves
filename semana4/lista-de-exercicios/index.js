// ------------EXERCICIO 1. 
// O trecho esta realizando uma função com um retorno de equação matematica para saber a coverção do dolar para real.
// Fazendo da seguinte forma: 
// A função recebe como parametro o valor em dolar desejado, transforma esse prompt ( pedido ao usuario) em numero e multiplica pela variavel cotação, quando invocada a função. No console será impreço a seguinta frase: R$ "valor que será convertido".

// ------------EXERCICIO 2.

// O trecho de codigo esta realizando umacondição de investimento com o retorno multiplicado pelo valor que renderia o investimento.
// Fazendo da seguinte forma:
// A função recebe como parametro o tipo de investimento desejado pelo usuario e o valor a ser investido, nas condiçoes estipuladas armazenando em uma variavel. Ele ira retornar uma equação quando invocado, na primeira vez que esta sendo invocada na variavel novoMontante ele ira imprimir no console (150*1.1) = 165.
// Na segunda ves que for invocada na variavel segundoMontante ira ser impresso no console o alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO"), pois, não existe a condição para o investimento informado entrando assim no default.

// -------EXERCICIO 3.
// O trecho de codigo a seguir realiza um loop separando numeros pares de impares através de uma condição por resto de divisão.
// O loop recebe uma array numeros e passa a condição por todos os numero fazendo uma divisão por dois no resto da divisão, se o resto da divisão for 0 ele da um push para o array1 que foi declarado na constante array1 como vazio, se não se o numero tiver o resto da divisão igual a 1 sera realizado o push no array2 declarado na constante arra2 como vazio.
// No console será impresso no console:
// (array1.length) 7
//  (array2.length) 7

// --------EXERCICIO 4.

//O trecho de codigo esta fazendo um loop que tem como parametro os numero do array.
// O loop faz duas condiçoes ira percorrer todos os numeros da array numeros e ver qual sera o menor numero e na segunda condição verificar qual numero da array numeros é amior que zero
// ira ser impresso no primeiro console -10 
// no segundo console sera impresso 1590
//---------- LOGICA DE PROGRAMAÇÃO ---------------

// 1. for  for/of while

// let minhaArray = [1, 2, 3, 4, 5, 6]
// let array = []
// for (let numeros of minhaArray) {

//     if (numeros % 2 === 0) {

//         array.push(numeros)
//     }
// }

// for(let i = 0; i < minhaArray.length; i++){
    
//     if(minhaArray[i] % 2 === 0){
//         array.push(minhaArray[i])
//     }
// }

// let n1 = 0

// while (n1 < 10) {
//     n1++   

//     console.log('entendi pq esta rodando meu codigo')

// }

// //----------EXERCICIO 2

// //--------- 2a
// true && false && true // RETORNARIA FALSE

// // --------2B
// (true && false) || !false // RETORNARIA TRUE

// // -------2c
// (false || true) && (false || true) // RETORNARIA TRUE 

// // -------2d
// !(false && true) || !(true && true) // RETORNA TRUE

// //--------2e
// !(true) && !(true) || (!false && true && true)//RETORNA TRUE


// -------EXERCICIO 3


const quantidadeDeNumerosPares = 3
let i = 0

while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

// Não funciona. Porque o sinal maior igual que do loop esta errado pois assim não sera impresso o numero que for digitado e sem a condição de incremento seria um loop infinito.

