const ul = document.querySelector('ul')
const todo = document.querySelector('.todo')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  let li = document.createElement('li')
 
  li.textContent = 'Novo item'
  ul.prepend(li)
})

/*const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    console.log('clicou na li')  // teste para apresentar o event bubbling

    event.stopPropagation()  // aqui usa-se para evitar o event bubbling
    clickedElement.remove()
  })
})

ul.addEventListener('click', () => {
  console.log('clicou na ul')  // teste para apresentar o event bubbling
})


desta forma não conseguimos pegar a ref das novas li para resolver usamos o 
codigo aqui embaixo
*/

ul.addEventListener('click', event => {
 const clickedElement = event.target

 console.log(event)

 })

