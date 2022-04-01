const randomNumbers = [36, 99, 37, 63]

/*
No filter pode ser recebido três parametros, e sempre deve retornar um bollean true
Ex: de sintaxe:

const numbersTha37 = randomNumbers.filter((item, index, array) => {
  return item < 37
})
console.log(numbersThan37)
*/

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log({ numbersGreaterThan37, randomNumbers })  // aqui vai mostrar um objeto com
                                                     // os dois arrays

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)
