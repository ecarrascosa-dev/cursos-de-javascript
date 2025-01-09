// Anonymous function
(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
})(5,5,5);

(function() {
    let x = 200
    console.log(x)
})();

(() => {
    console.log('arrow #01')
})();
