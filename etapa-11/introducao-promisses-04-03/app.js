const getTodos = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
 
  request.addEventListener('readystatechange', () => {
    const isRequestOkay = request.readyState === 4 && request.status === 200
    const isRequestNotOkay = request.readyState === 4

    if (isRequestOkay) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    if (isRequestNotOkay) {
     reject('não foi possível obter os dados da API')
    }
  })

  request.open('GET', url)
  request.send()
})

getTodos('https://pokeapi.co/api/v2/pokemon/1')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error))

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     resolve('Dados aqui')
//     reject('erro aqui')
//   })
// }
// getData()
//   .then(value => console.log(value))
//   .catch(error => console.log(error))
