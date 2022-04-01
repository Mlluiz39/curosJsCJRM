//utilizando callback
const ul = document.querySelector('[data-js="js"]')

const socialNetWorks = ['youtube', 'twiter', 'instagram', 'facebook']
let HTMLTemplate = ''

socialNetWorks.forEach((socialNetWork) => {
  HTMLTemplate += `<li style="color: deeppink;">${socialNetWork}</li>`
})

ul.innerHTML = HTMLTemplate

const notas = [7.7, 6.5, 5.2, 8.9, 9.0]

//com callback e function anonima
const notadeCorte = notas.filter(function (nota) {
  return nota < 7
})

//com callback e arrow function
const notadeCorte1 = notas.filter(nota => nota < 7)

 console.log(notadeCorte)
 console.log(notadeCorte1)

 const nameSurname = (firstName, callback) => {
  console.log(firstName, callback( ))
  }
   nameSurname('Marcelo',() => 'Luiz')

  
   const displayMessage = (successfulCallback, errorCallback) => {
    var id = prompt('Digite um numero entre 0 e 1')

    if (id === '1') {
      successfulCallback ('Dados recuperados com sucesso usando: função de callback')
    } else {
      errorCallback ('Error: falha ao recuperar os dados')
    }
  }
  
  const successfulCallback = sucesso  => {
    document.write (`<h3 style="color: blue;">${sucesso}</h3>`)
  }
  
  const errorCallback = erro => {
    document.write (`<h3 style="color: red;">${erro}</h3>`)
  }

  displayMessage (successfulCallback,  errorCallback)
  
  