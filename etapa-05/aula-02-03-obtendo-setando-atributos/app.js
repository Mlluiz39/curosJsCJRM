const link = document.querySelector('a')

//console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://marcelo-luiz.com')  // altera o atributo

link.innerText = 'Marcelo Luiz'  // altera o texto do link

const paragraph = document.querySelector('p')

console.log(paragraph)
console.log(paragraph.getAttribute)
  
paragraph.setAttribute('class', 'Success')  // alterando a classe

paragraph.setAttribute('style', 'color: red; font-size: 50px')  // setando estilo