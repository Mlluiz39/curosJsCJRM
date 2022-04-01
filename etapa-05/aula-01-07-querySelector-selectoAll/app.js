const paragraph1 = document.querySelector('p')

//console.log(paragraph1)

const paragraph2 = document.querySelector('.error')

//console.log(paragraph2)

const errorDiv = document.querySelector('div.error')

//console.log(errorDiv)

const h1SelectorToBrowser = document.querySelector('body > h1')

//console.log(h1SelectorToBrowser)

const pSelector = document.querySelector('body > div:nth-child(2) > p:nth-child(2)')

//console.log(pSelector)

const paragraphs = document.querySelectorAll('p')

//console.log(paragraphs)
//console.log(paragraphs[0])

paragraphs.forEach(paragraph => {
  console.log(paragraph)
})

const errors = document.querySelectorAll('.error')

console.log(errors)
