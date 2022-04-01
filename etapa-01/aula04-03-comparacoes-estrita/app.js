const age = 31

// 'igual a' e 'diferente de'
console.log(age == '31')
console.log(age != 31)
console.log(age != '31')

// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
console.log(age === 31)
console.log(age === '31')  // agora deu false pois não são igual

console.log(age !== 31)     // aqui da false pois number 31 não é diferente de number 31
console.log(age !== '31')  // aqui dá true pois number 31 não é igual a string 31 