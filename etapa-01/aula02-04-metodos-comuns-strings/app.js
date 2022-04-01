// Métodos de strings
const email = 'mlluizpereira@gmail.com'

const lestIndexOffA = email.indexOf('e')  //obtem a ultima ocorrência de letra no argumento

console.log(lestIndexOffA)

let emailSlice0 = email.slice(0, 13)
let emailSlice1 = email.slice(6, 13)

let emailReplace0 = email.replace('m', 'l')
let emailReplace1 = email.replace('mlluiz', 'marcelo')

console.log(emailSlice0)
console.log(emailSlice1)

console.log(emailReplace0)  //aqui vai subtituir m por l na primeira ocorrência
console.log(emailReplace1)

//esses metodos não alteram a variavel original
