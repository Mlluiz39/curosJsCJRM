const formElement = document.querySelector('.signup-form')

formElement.addEventListener('submit', event => {
  event.preventDefault()
  console.log(formElement.username.value)
})

const regex = /^[a-zA-Z0-9]{2,}$/
const result = regex.test('mlluizpereira@gmail.com')

console.log(result)
