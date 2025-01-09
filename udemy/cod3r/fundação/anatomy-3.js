const increment1 = function(n) {
    return n + 1
}

// Arrow Function is alwats anonymous
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1

const increment5 = (a, b) => a + b 

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))
console.log(increment5(4, 4))