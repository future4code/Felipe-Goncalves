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

// const quantidadeDeNumerosPares = 3
// let i = 0

// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// Não funciona. Porque o sinal maior igual que do loop esta errado pois assim não sera impresso o numero que for digitado e sem a condição de incremento seria um loop infinito.

// -------EXERCICIO 4

// function verifcaLado (a, b, c) {
//     if((a === b) && (b === c)){
//         return "É um trianqulo equilatero"
//     }else if ((a === b && b != c ) || (a != b && b === c) || (a === c && b === c)){
//         return "É um triagulo isócele"
//     }else{
//         return "É um trinagulo escaleno"
//     }

// }

// console.log(verifcaLado(2, 4, 3))

// // -------EXERCICIO 5

// let numero1 = 60
// let numero2 = 35

// if(numero1 < numero2){
//     console.log(`O numero maior é: ${numero2}`)
// }else {
//     console.log(`O numero maior é: ${numero1}`)
// }

// if(numero1 % numero2 === 0){

//     console.log(`${numero1} é divisivel por ${numero2}`)
// }else{

//     console.log(`${numero1} não é dividivel por ${numero2}`)
// }

// if (numero2 % numero1 === 0){

//     console.log(`${numero2} é divisivel ${numero1}`)
// }else {
//     console.log(`${numero2} não é divisivel por ${numero1}`)
// }

// if ( numero1 > numero2){

//     let resultado = numero1 - numero2
//     console.log(`A diferença entre eles é: ${resultado}`)
    
// }else if (numero2 > numero1){
//     resultado = numero2 - numero1
//     console.log(`a difetença entre eles é: ${resultado}`)
// }else {
//     console.log(`Eles são iguais!!!!`)
// }

// -----EXERCICIO DE FUNÇÔES------

// --------1.

const numerosArray = [22, 44, 55, 111, 474, 232, 9876]
let primeiroMaior = numerosArray[0]
let segundoMaior = numerosArray[0]

const comparaSegundo = (numerosArray) => {
    for(let i = 0; i < primeiroMaior; i++){

        if(i < primeiroMaior){
            
            primeiroMaior = numerosArray[i]
            
        }else{
            segundoMaior = numerosArray[i]
        }

        
    }  

    return segundoMaior
    
}
console.log(comparaSegundo(numerosArray))

// ----------EXERCICIO 2----------

const olaLabenu = () => {
    alert("Hello Labenu!!!!!")
    
}

olaLabenu()