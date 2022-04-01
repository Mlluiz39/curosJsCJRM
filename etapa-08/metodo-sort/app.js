//exemplo 1: ordenação de strings
const names = ['Cristian', 'Alfredo', 'Edson']
names.sort()

console.log(names)  // O sort altera o array original


//exemplo 2: ordenação de numeros
const scores = [10, 50, 20, 5, 35, 70, 45]
scores.sort((score1, score2) => score1 - score2)  // aqui como o numero 1 está primeiro
                                                 //fica em ordem crescente

scores
//debugger


//exemplo3: ordenação de objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//   if (item1.score > item2.score) {
//     return - 1
//   } else if(item2.score > item1.score) {
//     return 1
//   }
//   return 0
// })

// debugger

theBigFamily.sort((item1, item2) => item2.score - item1.score)  // aqui como o 
                              //numero 2 está primeiro fica em ordem decrescente

theBigFamily
//debugger