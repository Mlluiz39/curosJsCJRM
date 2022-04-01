const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data =
    await response.json() /* aqui também usamos await pois é uma promise 
  então temos que esperar que a resposta seja executada para ai sim ser atribuída ao data
  */
  console.log(response, data.length)
  console.log(data[0])
  console.log(data[0].name)
}

getUsers()

/* esse código é o mesmo que o de cima, porém com o async await com retorno implícito */
async function dataUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  return await response.json() /* aqui retorna uma promise ou seja toda function async 
  retorna implicitamente uma promise
  */
}

console.log(dataUsers())

/*
*************** forma sem async/await *************** 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('Response', response)
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => console.log(error))
  */
