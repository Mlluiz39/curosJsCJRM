// Criando objetos literais
let user = {
  name: 'Marcelo',
  age: 41,
  email: 'mlluiz@gmail.com',
  city: 'São Paulo',
  blogPosts: ['empadão', '2 receitas de pure']
}

console.log(user)
console.log(user.name)  // aqui podemos acessar o valor da propriedade name
console.log(user.age)  // aqui acessamos o valor da propriedade age
console.log(user.blogPosts)
console.log(user.blogPosts[1])
console.log(user.blogPosts[1].toLocaleUpperCase())  // tambem podemos utilizar os metodos de array

user.name = 'Luiz'   // aqui alteramos o valor da propriedade

console.log(user.name)

console.log(user['email'])  // aqui acessamos com notação colchetes

user['city'] = 'Rio de Janeiro'  // aqui aletramos usando notação colchete

console.log(user['city'])

//casos de uso do colchetes

const key = 'email'

console.log(user[key])  // aqui acessamos o valor da chave por meio da variavel usando ponteiros
console.log(key)  // aqui mostra a string email, se usarmos user[key] ai ele acessa o valor da propriedade email

console.log(user)

const name = 'camisa'
const price = 20

/**********************************Short Syntax *******************************/
const product = {
  name,
  price,
  inStock: true
}

console.log(product)