// function myFunc2 (callback) {
//   const value = 41
//   callback(value)
// }

myFunc2 (function(number) {
  console.log(number);
});


// No formato Arrow
const myFunc = callback => {
  const value = 77

  callback(value)
}

myFunc (number => {
  console.log(number)
})

//usando metodo forEach e arrow function
const socialNetwork = ['youtube', 'twiter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
  console.log(index + 1, socialNetwork, array)
}

socialNetwork.forEach(logArrayInfo)
 