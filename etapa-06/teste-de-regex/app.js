const form = document.querySelector('.signup-form')
//const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  const pattern = /^[a-z]{6,}$/
  const isAMatch = pattern.test(event.target.username.value)

  if (isAMatch) {
    console.log('O teste da regex passou =)') 
  } else {
    console.log('O teste da regex não passou =)')
  }
  event.target.username.value = '' 
})

const name = '123marcelo'
const pattern = /^[a-z]{6,}$/
const result = name.search(pattern)  // aqui vai mostrar o index do match ou -1 se não der match

console.log(result)
/*************************************************************************/
let regExp = /jonh@gmail.com/
let emailRegex = /jonh\@gmail\.com/
let grupoCaracter = /^[a-z][a-z][a-z][a-z]@gmail.com$/  //aqui quantifica até 4 caracteres
let grupoCaracter1 = /^[a-z]{4}@gmail.com$/
//let grupoCaracter2 = /^[a-z]+@gmail.com$/  aqui vai quantificar um ou mais caracteres
//let grupoCaracter2 = /^\w+@gmail.com$/
//let grupoCaracter2 = /^\w+@\w+\.com$/
//let grupoCaracter2 = /^\w+@\w+\.\w{3}$/ aqui ele serve para ate o (.com)
let grupoCaracter3 = /^\w+@\w+\.\w{2,3}$/  //aqui ele serve para o (.com) e (.io)  
let grupoCaracter4 = /^\w+@\w+\.(\w{2,3})$/  //aqui para pegar mais de um grupo (entre())
let grupoCaracter5 = /^\w+@\w+(\.\w{2,3})+$/
let results = regExp.exec('jonh@gmail.com')
let results1 = emailRegex.test('jonh@gmailxcom') // vai dar false pois o x não é considerado
let result1 = grupoCaracter.test('joe@gmail.com')
let result2 = grupoCaracter1.test('jane@gmail.com')  // true pois tem 4 caracteres
let result3 = grupoCaracter3.exec('mlluiz@gmail.io')
let result4 = grupoCaracter4.exec('mlluiz@gmail.com')
let result5 = grupoCaracter5.exec('mlluiz@gmail.com.br')

console.log(results[0])
console.log(results.index)
console.log(results.input)
console.log(results1)  //false pois o ponto foi escapado
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

// . - Representa qualquer caracter
// \ - A barra é utilizada antes de caracteres especiais, com o objetivo de escapá-los
// ^ - Inicia com 
// $ - Finaliza com

                       /* Grupo de caracteres*/
// [abc] - Acaita qualquer caractere dentro do grupo nesse caso a, b ou c
// [^abc] - Não aceita qualquer caractere dentro do grupo nesse caso a, b ou c
// [0-9] - Aceita qualquer caractere entre 0 e 9
// [^0-9] - Não aceita qualquer caractere entre 0 e 9

                      /* Quantificadores*/
// Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
// {n} - Quantifica um numero expecifico
// {n,} - Quantifica um numero minimo
// {n,m} - Quantifica um numero minimo e um numero maximo
// ? - Zero ou um
// * - Zero ou mais
// + - Um ou mais

                       /* Metacaracteres*/
// \w - Representa o conjunto [a-zA-Z0-9_]
// \W - Representa o conjunto [^a-zA-Z0-9_]
// \d - Representa o conjunto [0-9]
// \D - Representa o conjunto [^0-9]
// \s - Representa um espaço em branco
// \S - Representa um não espaço em branco
// \n - Representa uma quebra de linha
// \t - representa um tab






