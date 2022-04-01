/* 
Para fazer um fetch é  só seguir tres passos !!!! 
1° passo: importar o fetch para buscar os dados e chamar via url
2° passo: fazer o parse do json para transformar em objeto e obter a resposta
3° passo: encadear um segundo then para obter o resultado e manipular os dados obtidos
*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('Response', response)
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => console.log(error))
