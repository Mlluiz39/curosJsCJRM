/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/

const myString = '    JS      '

console.log(myString)
console.log(myString.trim())

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const scoresInAscendingOrder = people
  .map(item => item)
  .sort((item2, item1) => item2.score - item1.score)  /* 
  QUANDO TIVER QUE GERAR UM NOVO ARRAY DE OBJ COM SORT TEMOS QUE GERAR 
  UM NOVO OBJETO POIS SE ENCADEARMOS DIRETAMENTE ESTAREMOS FAZENDO REFERENCIA 
  AO OBJ ORIGINAL 
  */

  people[0].firstName = 'valor modificado'
console.log(people, scoresInAscendingOrder)



/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']
const threeLetterAnimalNames = animals.filter(animal => animal.length === 3)


/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

const numbersInAnimals = animals.map(animal => animal.length)


/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const friendsLiveNearby = friends
  .map(friend => friend)
  .filter(friend => friend.nearMe)
  console.log(friendsLiveNearby)

/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const oddNumbers = numbers.filter(filter => filter % 2 === 1).reduce((acc, item) => {
  
    return acc + item
}, 0)


/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]

const sumOfPeople = data
  .filter((item) => item.country !== 'China')
  .reduce((acc, item) => acc + item.population, 0)
  console.log(sumOfPeople)


  /**************************************** REFATORADO ***********************************/

  *
  01

  /*- Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/

const myString = '    JS      '
const trimmedString = myString.trim()

console.log(myString)
console.log(trimmedString)

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
  { firstName: 'Estavão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

// const peopleCopy = people.map(person => {
//   return {
//     firstName: person.firstName, 
//     lastName: person.lastName, 
//     score: person.score}
//   })
const peopleOrderedByScore = people
  .map(({ firstName, lastName, score }) => ({firstName,lastName,score,}))
  .sort((a, b) => a.score - b.score)  /* 
  QUANDO TIVER QUE GERAR UM NOVO ARRAY DE OBJ COM SORT TEMOS QUE GERAR 
  UM NOVO OBJETO POIS SE ENCADEARMOS DIRETAMENTE ESTAREMOS FAZENDO REFERENCIA 
  AO OBJ ORIGINAL 
  */
  
  console.log(people, peopleOrderedByScore)
/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']
//const threeLettrAnimals = animals.filter(animal => animal.length === 3)
const threeLettrAnimals = animals.filter(({ length }) => length === 3)

/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

//const animalNamesLength = animals.map(animal => animal.length)
const animalNamesLength = animals.map(({ length }) => length)

/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const friendsNearMe = friends.filter(({ nearMe }) => nearMe)
const nameOfFriendsNearme = friendsNearMe.map(({ name }) => name)


/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]
const oddNumbersSum = numbers
  .filter(number => number % 2)
  .reduce((acc, oddnumber) => acc + oddnumber, 0)


/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]

const populationSum = data
  .filter(({ country }) => country !== 'China')
  .reduce((acc, { population }) => acc + population, 0)
 debugger