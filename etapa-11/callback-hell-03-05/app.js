const getTodos = (url, callback) => {
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

  request.open('GET', url)
  request.send()
}

getTodos('./json/todos.json', (error, data) => {
  console.log(data)
  getTodos('./json/todos-02.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-03.json', (error, data) => {
      console.log(data)
    })
  })
})