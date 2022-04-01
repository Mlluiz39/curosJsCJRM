// variaveis e escopo de bloco

let age = 31

if (true) {
  /* age = 41 aqui ele reatribuiu a variavel global */
  let age = 41  // aqui pode ser criada com o mesmo nome pois são escopos diferentes
  let name = "Marcelo"

  console.log(`dentro do 1° bloco de código: ${name} tem ${age} anos`)
  if (true) {
    let age = 51

   console.log(`dentro do 2° bloco de codigo ${name} tem ${age}`)
  }

}

console.log(`fora do bloco de codigo: ${name}name não existe tem ${age} anos`)