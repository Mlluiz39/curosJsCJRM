const past = new Date('jul 18 2020 8:10:00')
const present = new Date()
console.log(present.getTime(), past.getTime())

const difference = present.getTime() - past.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

console.log(`Post escrito há ${days} dias`)

const timestamp = 1662698461990
console.log(new Date(timestamp))