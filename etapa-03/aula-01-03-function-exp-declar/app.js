//////////////////// fuction declaration ///////////////////////
function sayHai () {
    console.log('oi')
    console.log('oi')
    console.log('oi')
    console.log('oi')
}
// aqui o js faz hoisting ou seja faz um inçamento 
//quer dizer que não importa o local da declaração da function

sayHai()

////////////////// function expression ////////////////////////

const showFood = function(value) {
    console.log(value)
}

showFood('macarrão')
