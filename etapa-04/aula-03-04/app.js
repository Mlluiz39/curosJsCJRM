// valores primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne:${scoreOne} | scoreTwo:${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne:${scoreOne} | scoreTwo:${scoreTwo}`)

//valores de referencia

let userOne = {name: 'Marcelo', age: 41}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 42

console.log(userOne, userTwo)

