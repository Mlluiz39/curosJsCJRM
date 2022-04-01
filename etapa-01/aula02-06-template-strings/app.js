// Template strings
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Marcelo Luiz'
const postComments = 15

//usando concatenação
const postMensage = 'O post "' + postTitle + '", do ' + postAuthor + ' ,tem ' + postComments + ' comentarios.'
/*
algumas forma de usar mais de uma aspas
'Marcelo "luiz"'  aspas duplas dentro de aspas simples
"Marcelo 'Luiz'"  aspas simples dentro de aspas duplas
'Marcelo \'luiz\''  escapando as aspas com barra inverida
 */

console.log(postMensage)
console.log('Marcelo \'Luiz\'')

// usando template strings
const postMensage1 = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentarios.`

console.log(postMensage1)

//criando template HTML
const html = `
<h3>${postTitle}</h3>
<p>Autor: ${postAuthor}</p>
<span>Este post tem ${postComments} comentarios.</span>

`
console.log(html)
document.write(html)  // escreve na pagina 


