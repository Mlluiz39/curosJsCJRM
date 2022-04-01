////////////// Retornando valores ////////////////////////

const double = function(number) {
	const doubleResult = number * 2
	return doubleResult
}

const result = double(7)

console.log(result)

const triplo = function(number) {
	return number * 3
}

const triploResult = triplo(7)

console.log(triploResult)

const showResult = function(value) {
	return `O resultado da conta é: ${value}`
}

console.log(showResult(result))