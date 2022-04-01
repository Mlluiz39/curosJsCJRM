const title = document.querySelector('h1')

//console.log(title)
//title.setAttribute('style', 'margin: 50px') sobrescreve o estilo original

console.log(title.style)  // para saber a propriedade, e no console ctrl + F  

title.style.margin = '100px'
title.style.color = 'red'
title.style.fontSize ='50px'
title.style.margin = ''  // aqui remove o estilo selecionado

