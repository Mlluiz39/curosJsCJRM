let score = '100'

console.log(score + 1)  // aqui vai concatenar pois string com number dá string
console.log(typeof score)

score = Number(score)

console.log(score + 1)  // tanto que agora no console o number está azul
console.log(typeof score)

const crazyConversion = Number('maça')
const convertedNumber = String(97)

console.log(crazyConversion, typeof crazyConversion)
console.log(convertedNumber, typeof convertedNumber)

const booleanConversion = Boolean(10)

console.log(booleanConversion, typeof booleanConversion)

/*
Valores falsy:
- false
- 0
- "", ''  string que não sejam preenchidas
- null
- undefined
- NAN

Valores trufhy:
- Qualquer valor que não seja falsy
 */

 