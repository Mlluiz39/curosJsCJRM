const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

/*  ************codigo original*********************
popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
 
  if (classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper') {
    popup.style.display = 'none'
  } 
})
codigo refatorado abaixo
*/
popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const className = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = className.some(className =>
    className === classNameOfClickedElement) // metodo de array para verificar se pelo menos um dos itens é true

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
})