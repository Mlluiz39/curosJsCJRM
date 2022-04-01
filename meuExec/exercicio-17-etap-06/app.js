/*
  01
  - No envio do form, faça com que a página não seja recarregada.
*/

const form =  document.querySelector('form')

const clearInput = () => {
  input.value = ''
  input.focus()
}

const logMessage = message => {
  console.log(message)
  clearInput()
}

const hadleSubmit = event => {
  event.preventDefault()
 
  const input = event.target.input
  const regexTest = /.{7,}/
  const regexTest2 = /[a-zA-Z0-9]{7,11}/
  const resultTest = regexTest.test(input.value)
  const resultTest2 = regexTest2.test(input.value)
 
  if (resultTest && resultTest2) {
   logMessage('O valor inserido no input é valido =)')
   return
  }
 
  logMessage('Valor inválido =(')
 }

form.addEventListener('submit',hadleSubmit )

/*
  02

  - No envio do form obtenha, através do objeto event, o texto inserido no  
    input e exiba-o no console.
*/

/*
  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/

const paragraphElement = document.querySelector('body > div > p > a')
let testRegexInput = /documentation/
let result = testRegexInput.test(paragraphElement.textContent)

console.log(result)

/*
  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/

const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'
const b99regex = /[A-Z0-9]{3}/
const b99Result = b99regex.test(B99message)

console.log(b99Result)

/*
  05

  - Modifique (manualmente) o valor que a const word armazena para que o  
    resultado do teste entre a regex e a string exibido no console seja true.
*/

const word = 'NASA'
const NASARegex = /^[A-Z]{4}$/
const NASAResult = NASARegex.test(word)

console.log(NASAResult)

/*
  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7  
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.
  
  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/

/*
  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.

  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/
