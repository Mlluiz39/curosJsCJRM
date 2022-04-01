//Arrays
let heroes = ['Batman', 'Catwoman', 'Iron-Man']

console.log(heroes[0])  //para obter o index que será Batman
console.log(heroes[3 - 2])  //podemos fazer operações tbm

heroes[2] = 'Spider-Man'

console.log(heroes)  //aqui alterou o array original

const ages = [31, 25, 39, 40, 25]

console.log(ages)
console.log(ages[2])  //da mesma forma que no strings pega o index

const randomArray = ['Pater', 'Diana', 19, 18]

console.log(randomArray)
console.log(randomArray[3])

//Métodos de arrays
const joinHeroes = heroes.join('|')  //aqui o parametro do join podemos mudar o separador

console.log(joinHeroes)

const indexOfHeroes = ages.indexOf(25)  //aqui pega somente a 1/] ocorrência do parametro

console.log(indexOfHeroes)

const lastIndexOfHeroes = ages.lastIndexOf(25)  //aqui pega a ultima ocorrência

console.log(lastIndexOfHeroes)

console.log(heroes.length)  //mostra a quantidade de objetos no array

const lastHeroes = heroes[heroes.length - 1]  //pega o ultimo com a propriedade length

console.log(lastHeroes)

const moreHeroes = heroes.concat(['Superman', 'Wolverine'])  //add mais objetos no array mas não mudo o original

console.log(moreHeroes)
console.log(heroes)  

const pushToheroes = heroes.push('Cyclops', 'Hulk')

console.log(pushToheroes)
console.log(heroes)

const unshiftHeroes = heroes.unshift('Flash')  //add só que no começo do array e tbm tem mutabilidade como no pop e push

console.log(heroes)

const popHeroes = heroes.pop()  //aqui ele remove do original e poem na const popHeroes

console.log(popHeroes)
console.log(heroes)

const shiftHeroes = heroes.shift()  //remove do começo e aqui tbm tem mutabilidade como no pop e push

console.log(shiftHeroes)
console.log(heroes)
