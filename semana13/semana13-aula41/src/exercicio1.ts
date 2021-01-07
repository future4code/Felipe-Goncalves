// const minhaString: String = 5
// A- Apresenta um erro, pois o tipo de valor que teri que receber deveria ser string.

// const meuNumero: Number | String  =  "cinco" 
// const meuNumero: Number  =  5 
// B- colocando a sintaxe | string logo a frente do number, assim a variavel aceitará tanto valores numerico como string.

// C-
const pessoa: {nome:String, idade:Number, corFavorita: String } = 
{
    nome:"Felipe Polato",
    idade: 30,
    corFavorita: "Azul"
}

// D- 
type pessoa = {nome:String, idade:Number, corFavorita: String }

const passoa1: pessoa =
{
    nome:"Felipe Polato",
    idade: 30,
    corFavorita: "Azul"
}

const passoa2: pessoa =
{
    nome:"Mariah",
    idade: 4,
    corFavorita: "Rosa"
}

const passoa3: pessoa =
{
    nome:"Fabricio",
    idade: 28,
    corFavorita: "Verde"
}

// E-
enum CoresDoArcoIris
{ 
    VERMELHO= "Vermelho", 
    LARANJA = "Laranja", 
    AMARELO = "Amarelo", 
    VERDE = "Verde", 
    ANIL = "Anil",
    AZUL = "Azul",
    VIOLETA = "Violeta"
} 

type Cores = { class: CoresDoArcoIris } 

const cor1: Cores = { class: CoresDoArcoIris.VERMELHO } 