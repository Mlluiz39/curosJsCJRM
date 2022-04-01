//Numbers

//inteiros e decimais
const radius = 10
const pi = 3.14

console.log(radius, pi)

//operadores aritmeticos
console.log(10 / 5)

const reminder = 5 % 2
/*Ex: De modulo => quando temos cinco(5) carros e dividimos
        entre duas(2) pessoas cada um fica com dois(2) carros
        esse um(1) carro que sobra é o modulo.  
 */

console.log(reminder)

//ordem de operações
const area = pi * radius ** 2  // 314

console.log(area)
/*
  1º parênteses
  2º expoentes ou raízes
  3º multiplicação
  4º adição e subtração
  */
 
  let crazyOperation = 5 * (10 - 3) ** 2  // 245

  console.log(crazyOperation)

  //operadores de incremento e decremento
  let postLikes = 10

  //postLikes = postLikes + 1 aqui sem shorthand
  postLikes ++  //com shorthand ou seja, escrita mais enxuta

  postLikes --  // da mesma forma no decremento

  console.log(postLikes)

  //operadores addtion, subtraction, multiplication e division assignment
  postLikes += 5
  postLikes -= 1
  postLikes *= 2
  postLikes /= 4

  console.log(postLikes)

  //NaN - not a number
  console.log(7 / 'oi')  // aqui vai dar NaN pois é impossivel dividir string com numero

  //concatenação de string com numero
  const likeMessage = 'O post tem ' + postLikes + ' likes.'

  console.log(likeMessage)