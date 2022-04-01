const getPokemon = url =>
  new Promise((resolve, reject) => {
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

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(squirtle => console.log(squirtle))
  .catch(error => console.log(error))
