const paragraph = document.querySelector('p')

paragraph.innerText += ' texto inserido'

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph, index) => {
  paragraph.innerText += ` => Novo texto ${index + 1}`
})

const div = document.querySelector('.content')
//console.log(div.innerHTML)

div.innerHTML += '<h2>Novo h2</h2>'

const section = document.querySelector('.sec')

const peoples = ['Jonatan', 'Vinicius', 'Diego']

peoples.forEach( people => {
  section.innerHTML += `<p>${people}</p>`
})

/* Tanto innerHTML como innerText são getters setters
Getters = Obtendo os valores
Setters = Setando os valores
*/