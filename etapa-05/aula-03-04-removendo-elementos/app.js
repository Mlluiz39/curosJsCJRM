 const ul = document.querySelector('ul')

// ul.remove() aqui remove todo o ul

const lis = document.querySelectorAll('li')
const button = document.querySelector('button')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})

const clickedButton = () => {
 ul.innerHTML += '<li>Novo item</li>'
 const li = document.createElement('li')

 li.textContent = 'Novo item'
 // ul.append(li)  add como ultimo filho
 // ul.prepend(li) add como primeiro filho
}

button.addEventListener('click', clickedButton)