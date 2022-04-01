//Booleans e Comparações
console.log(true, false, 'true', 'false')

//Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('@')  // verifica sem tem o caracter dentro da string
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('rob')

console.log(includes)

console.log(names)

console.log(arrayIncludes)

//Operadores de comparação
const age = 31
const nameComparation = 'marcelo'

console.log(age == 31)  // true
console.log(age == 32)  // false
console.log(age == '31')  //true pois só compara os valores
console.log(age != 32)  // true
console.log(age != 31)  // false
console.log(age > 31)  // false  pois não é maior é igual
console.log(age < 31)  // false  pois não menor é igual
console.log(age > 32)  // false  
console.log(age < 32)  // true
console.log(age <= 31)  // true
console.log(age >= 31)  // true
console.log(nameComparation == 'marcelo')
console.log(nameComparation > 'biel')  // aqui da true pois compara a ordem das letras, pois o b vem antes do M
console.log(nameComparation > 'Biel')  // aqui da true tambem pois as letras minusculas vem antes das Maiusculas 
                                       /*Ex:
                                        abcdefghijklmnopqrstruvxyz,ABCDEFGHIJKLMNOPQRSTUVXYZ logo a letra "a" é a menor.
                                       */          