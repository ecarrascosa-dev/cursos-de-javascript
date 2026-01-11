const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let soma = 0;

// for(number of array) {
//     if(number % 2 === 0) {
//         soma++;
//         continue;
//     }    
// }
// console.log(`Você tem ${soma} numeros pares nesse Array`);
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); 
}

let min = 1;
let max = 30;
let rand = random(min, max);

for (number of array) {
    if(number === rand) {
        break;
    }
    console.log(number);
}

