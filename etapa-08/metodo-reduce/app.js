/* 
No reduce ele recebe um função por argumento e ele serve para reduzir o array
para qualquer outra saida ou seja um objeto literal uma string, um numero ou outro array

const sumResult = numbers.reduce((accumulator, item, index, array) => {
  return accumulator + item
}, 0)
console.log(sumResult)
*/

const aulas = [10, 25, 30]
const reduceAulas = aulas.reduce((acc, item) => {
  console.log(acc, item)
  return acc + item
}, 0)

console.log(reduceAulas)

const aulasWeb = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
      min: 20
  },
  {
    nome: 'CSS 2',
    min: 25
  }
]

const listaAulasWeb = aulasWeb.reduce((acc, atual, index) => {
  acc[index + 1] = atual.nome
  return acc
}, {})

console.log(listaAulasWeb)


const numeros = [10, 25, 30, 3, 54, 33, 22]
const maiorNumero = numeros.reduce((anterior, atual) => {
  if (anterior > atual) 
    return anterior
  else 
    return atual
})

console.log(maiorNumero)


const numeros1 = [10, 25, 30, 3, 54, 33, 22]
const menorNumero = numeros1.reduce((anterior, atual) => anterior < atual ? anterior : atual)

console.log(menorNumero)


const numbers = [1, 2, 3]
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)


const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 },
  { name: 'Roger Melo', score: 451 },
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
  if(phaseScore.name === 'Roger Melo') {
    accumulator += phaseScore.score
  }
  return accumulator
}, 0)

console.log(rogerScore)