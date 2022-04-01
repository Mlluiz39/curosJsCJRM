const fruits = ['laranja', 'morango', 'maça']

const fruit0 = fruits[0]
const fruit1 = fruits[1]

console.log(fruit0, fruit1)

let [b, d] = fruits
console.log(b, d)

let[a, , c] = fruits  // aqui deixamos um espaço em branco para fazer o indice 1
console.log(a, c)

/********************* desestruturando objetos ********************************/

const person = {
  firstName: 'Marcelo',
  secondName: 'Luiz',
  age: 42,
  adress: {
  city: 'São Paulo',
  region: 'SP'
  }
} 

//const firstName = person.firstName
//const secondName = person.secondName
//const city = person.adress.city
//console.log(firstName, secondName, city)

const {firstName, secondName, adress: { city }} = person
console.log(firstName, secondName, city)

const showFullName = (person) => {
  console.log(`${person.firstName} ${person.secondName}`)
}

showFullName(person)

const showFullName1 = ({ firstName, secondName }) => {
  console.log(`${firstName} ${secondName}`)
}

showFullName1(person)