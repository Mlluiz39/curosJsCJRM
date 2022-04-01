/*const myfunc = () => {

}

myfunc()

const myfunc = string => {
console.log(string)
}

myfunc('Minha string')
*/

const myfunc = aFunction => {
  console.log(aFunction())  // função invocada
}

myfunc(() => 'oi')  // função declarada como argumento