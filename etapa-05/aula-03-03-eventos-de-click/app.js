const lis = document.querySelectorAll('li')
const btn = document.querySelector('button')

lis.forEach(li => {
  li.addEventListener('click', event => {
    /* console.log(event.target)  aqui podemos pegar com a ref do forEach no caso (li) */
    const clickedElement = event.target

    clickedElement.style.textDecoration = 'line-through'

    btn.addEventListener('click', () => {
      clickedElement.style.textDecoration = 'none'
    })
  })
})