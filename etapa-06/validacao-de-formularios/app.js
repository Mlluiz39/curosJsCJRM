const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const isAValueUsername = usernameRegex.test(username)

  if(isAValueUsername) {
    feedback.textContent = 'username válido =)'
    return
  }

  feedback.textContent = 'o username deve conter de 6 a 12 caracteres e apenas letras.'
})