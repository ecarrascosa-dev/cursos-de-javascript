//Anonymous function
(function (a, b) {
    return a + b
})

//Function expression
const sum = function (a, b) {
    return a + b
}

const result = sum(7, 50) 
console.log(result)

const anotherSum = sum 
console.log(anotherSum(5, 5))

let x = 3
console.log(x)

x = sum
console.log(x(11, 16))