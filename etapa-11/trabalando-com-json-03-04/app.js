const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOkay = request.readyState === 4 && request.status === 200
    const isRequestNotOkay = request.readyState === 4

    if (isRequestOkay) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (isRequestNotOkay) {
      callback('Erro ao buscar json', null)
    }
  })

  request.open('GET', './todos.json')
  request.send()
}
console.log(1)
console.log(2)

getTodos((error, data) => {
  console.log('callback executado')

  if (error) {
    console.log('erro')
    return
  }

  console.log(data)
})

console.log(3)
console.log(4)
