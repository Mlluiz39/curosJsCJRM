//strings
console.log('Hello world')

let email = 'mlluizpereira@gmail.com'

console.log(email)

//concatenação de strings
const firstName = 'Marcelo'
const lastName = 'Luiz'
let fullName1 = firstName + lastName  // aqui junta tudo sem espaço
let fullName2 = firstName + ' ' + lastName  //aqui com espaço

console.log(fullName1)
console.log(fullName2)

//acessando caracteres
console.log(fullName1[0])
console.log(fullName2[1])

//propriedades da string comprimento
console.log(fullName1.length)
console.log(fullName2.length)

//metodos de strings
console.log(fullName2.toUpperCase())  // aqui no parenteses chamamos de argumentos
const result = fullName2.toLowerCase()

console.log(result)  //aqui podemos usar em outro momento

console.log(fullName2, result)  //aqui vemos que não foi alterada a variavel original

//metodos que esperam argumentos
const index = email.indexOf('@')

console.log(index)  //aqui pegou o index do arroba que é 13