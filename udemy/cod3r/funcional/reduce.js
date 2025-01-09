const numbers = [1, 2, 3, 4, 5]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)
let media = numbers.length
console.log(total / media)
