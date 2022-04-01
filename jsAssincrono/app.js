const promessa = new Promise(resolve => {
  resolve('Marcelo')
})

console.log(promessa)

const promessa1 = new Promise((resolve, reject) => {
  //reject(Error('Um erro ocorreu na promise'))
})

console.log(promessa1)

const promessa2 = new Promise((resolved, reject) => {
  let { name, idade } = {name: 'Marcelo', idade: 42}
  let condition = 1
  if (condition) {
   setTimeout(() => {
    resolved(`cheguei com este objeto, ( ${name} ${idade} anos )`)
   }, 6000)
  } else {
    setTimeout(() => {
      reject('Deu ruim de verdade!!!')
     }, 6000)
   
  }
})

const retorno = promessa2.then(resolvido => console.log(resolvido))

console.log(retorno)