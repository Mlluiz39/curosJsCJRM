const double = function (number = 0) {
  return number * 4
}

console.log(double(4))

// Arrow Function
const double1 = (number) => {
  return number * 3
}

console.log(double1(3))

//caso seja apenas um parametro
const double2 = number => {
  return number * 2
}

console.log(double2(2))

//caso o retorno não seja de uma expressão string, number, boolean ou array
const double3 = number => number * 1

console.log(double3(1))

////////////////////////function normal////////////////////////////////////////
function sum (number1, number2) {
  return number1 + number2
}

console.log(sum(1, 6))

// Arrow function
const sum0 = (number1, number2) => {
  return number1 + number2
}

console.log(sum0(10, 22))

 //sem retorno que retorna (retorno implicito)
const sum1 = (number1, number2) => number1 + number2

console.log(sum1(10, 2))

//sem parametros e sem retorno ( quando temos apenas um parametro)
const double = number => number * 2

console.log(double(8))

/*chaves e return no caso abaixo precisa ser colocada as chaves pois
tem uma logica no corpo */
const checkAge = (year) => {
  if (year >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

console.log(checkAge(11))