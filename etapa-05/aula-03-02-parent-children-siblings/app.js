const article = document.querySelector('article')

/* console.log(article.children) aqui busca os filhos */

Array.from(article.children).forEach(element => {
  element.classList.add('article-element')
})  // aqui converteu HTMLCollection em array para fazer forEach

const h2 = document.querySelector('h2')

console.log(h2.parentElement.parentElement)  /* aqui buscamos o pai do h2 que é o
article e depois buscamos o pai do pai que é o body
*/

console.log(h2.nextElementSibling)  // aqui buscamos o proximo irmão do h2 que é o article

console.log(h2.previousElementSibling)  // busca o irmão anterior ou seja vai subindo