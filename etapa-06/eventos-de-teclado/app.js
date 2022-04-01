const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z0-9]{6,12}$/.test(username)  // função arrow

form.addEventListener('submit', event => {
  event.preventDefault()

  //const username = event.target.username.value
  //const usernameRegex = /^[a-zA-Z]{6,12}$/
  //const isAValueUsername = usernameRegex.test(username)
  const isAValidUsername = testUsername(event.target.username.value)

  if(isAValidUsername) {
    feedback.textContent = 'username válido =)'
    return
  }

  feedback.textContent = 'o username deve conter de 6 a 12 caracteres e apenas letras.'
})

form.username.addEventListener('keyup', event => {
  //const username = event.target.value
  const isAValidUsername = testUsername(event.target.value)  /* recebendo a invocação da função
  e como parametro o valor do evento */
  console.log(event)
 
  //const usernameRegex = /^[a-zA-Z]{6,12}$/
  //const isAValueUsername = usernameRegex.test(username)

  if (isAValidUsername) {
    //console.log('é valido')
    form.username.setAttribute('class', 'success')
    form.btn.setAttribute('class', 'btn-active')
    return
  }
  //console.log('não é valido')
  form.username.setAttribute('class', 'error')
  form.btn.setAttribute('class', 'btn')
 
})