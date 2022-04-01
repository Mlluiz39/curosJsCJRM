//Parâmetros / argumentos e default parameters
const myFunc = function (name) {
    console.log(`Oi, ${name}`)
}

myFunc('Marcelo')


const myFunc2 = function (name, lastname) {
    console.log(`Oi, ${name} ${lastname}`)
}

myFunc2('Roger', 'Melo')


const myFunc3 = function (name = 'Julia', lastname = 'Souza') {
    console.log(`Oi, ${name} ${lastname}`)
}

myFunc3()  // aqui está usando o parametro default
myFunc3('Cilene', 'Francisco')  // aqui fez uso da invocação
myFunc3('Cilene')  // aqui fez uso da invocação só no primeiro parametro