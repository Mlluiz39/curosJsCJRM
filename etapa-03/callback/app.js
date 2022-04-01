/*
const $button = document.querySelector('button')

$button.addEventListener('click', () => {
  //console,console.log(('Botão clicado'));
})

const handleClick = () => {
 document.write('clicou')
}

$button.addEventListener('click', handleClick)
*/

function newButton (text, callback) {    // função responsavel por criar botão (primeiro parametro é text)
const $body = document.querySelector('body')
const $button = document.createElement('button')
$button.textContent = text    // recebendo o paramentro e deixando dinamico

callback($button)            // aqui instancia a função de callback e executa na hora de craição das funções newButton

$body.insertAdjacentElement('beforeend', $button)

return $button          // retorno da função para usar na const login
}

newButton('Login', (loginButton) => {    // aqui o parametro passado é o do "(callback($button))"
  loginButton.style.cssText = `
  margin-right: 30px;
  font-size: 40px;
  background: blue;
  color: #fff;
  border-radius: 10px;
  `

  loginButton.addEventListener('click', () => {
    console.log('Fez login')
  })
})
newButton('Signup', (signupButton) => {
  signupButton.style.cssText = `
font-size: 40px;
background: #252525;
color: #fff;
border-radius: 10px;
`

signupButton.addEventListener('click', () => {
  console.log('Cadastro realizado com sucesso')
})
})


/*
login.style.cssText = `
font-size: 40px;
color: red;
`

login.addEventListener('click', () => {
  console.log('fazendo login')
})

signup.style.cssText = `
font-size: 20px;
color: blue;
`

signup.addEventListener('click', () => {
  console.log('fazendo signup')
})
*/