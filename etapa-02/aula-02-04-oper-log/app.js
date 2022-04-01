const password = 'oi1dr'

if (password.length >= 12 && password.includes('1')) {
    console.log('senha muito forte =)')  // aqui as condições tem que ser verdadeira
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('essa senha é forte')  // aqui verfica se uma das condições é verdadeira
} else {
    console.log('a senha deve conter 8 ou mais caracteres')
}